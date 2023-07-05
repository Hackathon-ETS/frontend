import { Route, Routes } from "react-router-dom";

import  Form from '../pages/Form/Form';
import ImprovesPeending from '../pages/ImprovesPeeding/ImprovesPeeding';
import Page404 from '../pages/NotFound';
import InfoRequester from '../pages/InfoRequester/InfoRequester'
function RoutesApp() {
    return(
        <Routes>
            <Route path='/'exact element={ <InfoRequester />  }/>
            <Route path='/improvement/new' element={ <Form/> }/>
            <Route path="/improvement/pending" element={ <ImprovesPeending/> }/>


            <Route path="*" element={ <Page404/> }/>
        </Routes>
    )
}

export default RoutesApp