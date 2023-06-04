import {Route, Routes} from 'react-router-dom';
import Main from '../components/SpecificPart/Main/MainIndex';
import Music from '../components/SpecificPart/Music/Music';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/music' element={<Music/>}/>
        </Routes>
    )
}

export default Router;