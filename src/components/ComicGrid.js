import React, {useContext} from 'react'
import MyContext from '../providers/context'
import styles from '../views/ComicList/ComicList.module.css'
const ComicGrid = () => {
    const {comics} = useContext(MyContext);
    return (
        <div>
            {
                comics.map(comic => (
                    <div key={comic.id} className="row">
                        <div className="col-4">
                            <img className="img-thumbnail" src={comic.image.original_url} alt="imagen del comic"/>
                        </div>
                        <div className="col text-center">
                            <div>
                                <b className={styles.subtopic}>
                                    {comic.name!=null?comic.name+' ':''  + comic.issue_number}
                                </b>
                            </div>
                            <span>{comic.date_added}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ComicGrid