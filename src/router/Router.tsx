import {Route, Routes} from 'react-router-dom';
import Main from '../components/SpecificPart/Main/MainIndex';
import Music from '../components/SpecificPart/Music/Music';
import Login from '../components/SpecificPart/login/Login';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/music' element={<Music/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    )
}

export default Router;