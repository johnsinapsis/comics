import React  from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faTh, faThList } from '@fortawesome/free-solid-svg-icons'

import Hola from './views/ComicList'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Hola}></Route>
    </BrowserRouter>
  );
}

export default App;
