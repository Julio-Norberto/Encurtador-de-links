import './link-item.css';
import { FiX, FiClipboard } from 'react-icons/fi'

export default function LinkItem({ closeModal, content }){

    async function copy(){
        await navigator.clipboard.writeText(content.link)
        alert("URL COPIADA!")
    }

    return(
        <div className='modal-container'>

            <div className='modal-header'>
                <h2>Link encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#000' />
                </button>
            </div>

            <span>
                {content.long_url}
            </span>

            <button className='modal-link' onClick={copy}>
                {content.link}
                <FiClipboard size={20} color='#FFF' />
            </button> 

        </div>
    )
}