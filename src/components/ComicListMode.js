import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import MyContext from '../providers/context'
import styles from '../views/ComicList/ComicList.module.css'

const ComicList = () =>{
    const {comics, apiKey} = useContext(MyContext);
    return (
        <div className="row">
            {
                comics.map(comic => (
                    <div key={comic.id} className="col-xl-3 col-6">
                        <div className="text-center">
                            <img className={`img-responsive ${styles['img-list']}`} src={comic.image.original_url} alt="imagen del comic"/>
                        </div>
                        <div className="text-center">
                            <Link 
                                to={{
                                    pathname: '/detail',
                                    state: {url: comic.api_detail_url, apiKey}
                                }}
                                >

                                <b>
                                    {comic.name!=null?comic.name+' ':''  + comic.issue_number}
                                </b>
                            </Link>
                        </div>
                        <div className="text-center">{comic.date_added}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default ComicList