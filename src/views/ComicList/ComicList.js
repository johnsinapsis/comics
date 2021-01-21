import React, {useState, useEffect} from 'react'
import styles from './ComicList.module.css'
import ComicListMode from '../../components/ComicListMode'
import ComicGrid from '../../components/ComicGrid'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faThList } from '@fortawesome/free-solid-svg-icons'

import MyContext from '../../providers/context'


const ComicList = (props)=>{
    
    const urlBase = props['url-base']
    const apiKey = props['api-key']
    const jsonFormatParam = 'format=json' 
    var urlQuery = `${urlBase}/issues/?api_key=${apiKey}&${jsonFormatParam}`

    const [mode,setMode] = useState(1)
    var El = mode===1 ? ComicListMode : ComicGrid
    const changeList = (state)=>{
        setMode(state)
    }

    const [comics,setComics] = useState([])


    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    useEffect(()=>{
        fetch(proxyurl +''+urlQuery)
            .then(res => res.json())
            .then((comics) =>{
                console.log(comics.results)
                setComics(comics.results)
            })
            .catch(()=> console.log('Information could not be obtained from the source site'))
    },[])

    return(
        <MyContext.Provider value={{comics,apiKey}}>    
            <div className={`container ${styles.container}`}>
                <div className="col-12 text-center">
                    <h3 className={styles.base}>ComicBook</h3>
                </div>
                <div className="row">
                    <div className="col-9 col-xl-10">
                        <strong className={styles.subtopic}>Latest Issues</strong>
                    </div>
                    <div className="col-3 col-xl-2 d-flex">
                        <div 
                            className={`flex-grow-1 ${mode===1 ? styles.active : ''}`}
                            onClick={()=>{
                                changeList(1)
                            }}>
                            <FontAwesomeIcon icon={faThList} />
                            <span className="pl-2"><b>List</b></span>
                        </div>
                        <div 
                            className={`flex-grow-1 ${mode===2 ? styles.active : ''}`}
                            onClick={()=>{
                                changeList(2)
                            }}>
                            <FontAwesomeIcon icon={faTh} />
                            <span className="pl-2"><b>Grid</b></span>
                        </div>
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-5">
                        <El></El> 
                    </div>
                </div>
        </div>
      </MyContext.Provider>
    )
  
}

export default ComicList;
