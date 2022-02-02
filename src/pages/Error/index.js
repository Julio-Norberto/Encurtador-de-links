import './error.css';
import { Link } from 'react-router-dom'; // o link server para fazer navegação por botões

export default function Error() {
    return(
        <div className='container-error'>
            <img src='/notfound.png' alt='Esta página não existe' />
            <h1>Página não encontrada</h1>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    )
}