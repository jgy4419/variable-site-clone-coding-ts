import {Route, Routes} from 'react-router-dom';

import Main from '../components/SpecificPart/Main/MainIndex';
import Music from '../components/SpecificPart/Music/Music';
import Menu from '../components/SpecificPart/Menu/Menu';
import Login from '../components/SpecificPart/login/Login';
import Card from '../components/SpecificPart/card/Card';
import SnackBar from '../components/SpecificPart/snackBar/SnackBar';
import Button from '../components/SpecificPart/button/Button';
import Accordion from '../components/SpecificPart/accordion/Accordion';
import Footer from '../components/SpecificPart/footer/Footer';
import CaptchaGenerator from '../components/SpecificPart/CaptchaGenerator/CaptchaGenerator';
import Etc from '../components/SpecificPart/etc/Etc';
import Parallax from "../components/SpecificPart/Parallax/Parallax"

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/music' element={<Music/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/SnackBar' element={<SnackBar/>}/>
            <Route path='/button' element={<Button/>}/>
            <Route path='/Accordion' element={<Accordion/>}/>
            <Route path='/footer' element={<Footer/>}/>
            <Route path='/CaptchaGenerator' element={<CaptchaGenerator/>}/>
            <Route path='/Menu' element={<Menu/>}/>
            <Route path='/Etc' element={<Etc/>}/>
            <Route path="/Parallax" element={<Parallax/>}/>
        </Routes>
    )
}

export default Router;