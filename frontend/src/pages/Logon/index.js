import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

import HeroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'

function Logon() {

    const refId = useRef(null)
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        let id = refId.current.value

        try {

            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)

            history.push('/profile')
        } catch (err) {
            alert('Falha no Login, tente novamente.')
        }

    }

    return (
        <div className="logon-container">

            <section className="form">
                <img src={LogoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça o seu Logon</h1>

                    <input ref={refId} placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn className="icon" size={16} color="#E02041" />
                     Não tenho cadastro
                    </Link>
                </form>

            </section>

            <img src={HeroesImg} alt="Heroes" />
        </div>
    )
}

export default Logon