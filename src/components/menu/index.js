import './menu.css'
import { BsGithub, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://github.com/JulioCesarNSM'> <BsGithub color='#FFF' size={24}/> </a>
            <a className='social' href='https://instagram.com/jcesar_n'> <BsInstagram color='#FFF' size={24}/> </a>
            <Link className='menu-item' to="/links">
                Meus links
            </Link>
        </div>
    )
}