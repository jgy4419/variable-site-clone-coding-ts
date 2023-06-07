import {Route, Routes} from 'react-router-dom';
import Main from '../components/SpecificPart/Main/MainIndex';
import Music from '../components/SpecificPart/Music/Music';
import Login from '../components/SpecificPart/login/Login';
import Card from '../components/SpecificPart/card/Card';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/music' element={<Music/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/card' element={<Card/>}/>
        </Routes>
    )
}

export default Router;