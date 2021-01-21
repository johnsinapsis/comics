import React, {useState, useEffect} from 'react'
import styles from './ComicDetail.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Character from '../../components/Character'
const ComicDetail = ({location}) =>{
    const urlBase = location.state.url
    const apiKey = location.state.apiKey
    const jsonFormatParam = 'format=json' 
    const urlQuery = `${urlBase}?api_key=${apiKey}&${jsonFormatParam}`
    const [data,setDetail] = useState()
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    useEffect(()=>{
        fetch(proxyurl + urlQuery)
            .then(res => res.json())
            .then((detail) =>{
                
                setDetail(detail.results)
                
            })
            .catch(()=> console.log('Information could not be obtained from the source site'))
    },[])
    /* const getCharacters = (url) =>{
        var urlQuery = `${url}?api_key=${apiKey}&${jsonFormatParam}`
        fetch(proxyurl + urlQuery)
            .then(res => res.json())
            .then((characters) => {
                console.log(characters)
            })
            .catch(()=> console.log('Information could not be obtained from the source site'))
        } */
    return(
        <div className={`container ${styles.container}`}>
            <div className="col-12 text-center">
                <h3 className={styles.base}>ComicBook</h3>
            </div>
            <div className="row">
                <div className="col-6">
                    <b><h3>Characters</h3></b>
                    <hr/>
                    <div className="row">
                    {
                        data  &&
                        data.character_credits.map(character =>(
                            <div key={character.id} className="pl-5">
                                <Character 
                                    url={`${character.api_detail_url}?api_key=${apiKey}&${jsonFormatParam}`}
                                    proxyurl={proxyurl}
                                    >

                                </Character>
                            </div>
                        ))
                        
                    }
                    </div>
                </div>
                <div className="col-6 text-right">
                    
                    <img src={data  && data.image.original_url} alt="comic image"/>
                    
                </div>
            </div>
        </div>    
    )
}

export default ComicDetail