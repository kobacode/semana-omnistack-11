import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    // Cadastrar
    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {title, description, value};

        try {
            await api.post('/incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            alert('Sucesso!');
            history.push('/profile');

        } catch(err) {
            alert('Erro de cadastro de caso;');
        }
        
    }

    return(
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>

                <form>
                    <input 
                        type="text" 
                        placeholder="Título" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />

                    <textarea 
                        placeholder="Descrição" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input 
                        type="text" 
                        placeholder="Valor" 
                        value={value} 
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button" type="submit" onClick={handleNewIncident}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
}