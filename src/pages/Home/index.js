import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../components/menu'
import LinkItem from '../../components/LinkItem';

import api from '../../services/api'
import { saveLink } from '../../services/storelinks'

export default function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState({});

    async function Shortlink(){
      try{
        const response = await api.post('/shorten', {
          long_url: link
        })

        setData(response.data);
        setShowModal(true);

        saveLink('@encurtador', response.data)

        setLink('')

      }catch{
        alert("OPS, algo deu errado, por favor tente novamente mais tarde");
        setLink('');
      }
    }

    return (
      <div className="container-home">

        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>Encurtador de Link</h1>
          <span>Cole seu link para encurtar!</span>
        </div>

        <div className="area-input">

          <div>
            <FiLink size={24} color='#FFF' />
            <input placeholder='Cole seu link aqui' value={link} onChange={ (e) => setLink(e.target.value) } />
          </div>

          <button onClick={Shortlink}>Gerar link</button>

        </div>

        <Menu/>

        { showModal && (
          <LinkItem
            closeModal={ () => setShowModal(false)} // atruibuimos uma função anonima para que o alert não seja executado automaticamente
            content={data}
          />
        ) }

      </div>
    )
  }