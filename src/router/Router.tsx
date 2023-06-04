import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Main from '../components/SpecificPart/Main/MainIndex';

const Router = () => {
    return (
        <Routes>
            <Route path='/main' element={<Main/>} />
        </Routes>
    )
}

export default Router;