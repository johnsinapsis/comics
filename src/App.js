import React  from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTh, faThList } from '@fortawesome/free-solid-svg-icons'

import ComicList from './views/ComicList'
import ComicDetail from './views/ComicDetail'

function App() {
  const urlBase = 'https://comicvine.gamespot.com/api'
  const apiKey = '6f7e42c1a04a1903ca5c2a635e441781e12a537b'
  return (
    <BrowserRouter>
      
      <Route path="/" exact>
        <ComicList url-base={urlBase} api-key={apiKey}></ComicList>
      </Route>
      <Route path="/detail" exact component={ComicDetail}></Route>
    </BrowserRouter>
  );
}

export default App;
