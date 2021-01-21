import React, {useState, useEffect} from 'react'
const Character = ({url,proxyurl}) =>{
    //console.log(url)
    const [character,setCharacter] = useState()
    useEffect(()=>{
        fetch(proxyurl + url)
            .then(res => res.json())
            .then((detail) =>{
                console.log(detail.results)
                setCharacter(detail.results)
                
            })
            .catch(()=> console.log('Information could not be obtained from the source site'))
    },[])
    return(
        <div className="d-flex">
            <div>
                <img src={character && character.image.icon_url} alt="icon Character"/>
            </div>
            <div className="mt-4 ml-2">
                {character && character.name}
            </div>
        </div>
    )
}

export default Character