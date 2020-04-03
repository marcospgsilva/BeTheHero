import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import LogoImg from '../../assets/logo.svg'

export default function Register() {

    const ongName = useRef(null)
    const ongEmail = useRef(null)
    const ongWhats = useRef(null)
    const ongCity = useRef(null)
    const ongUf = useRef(null)

    async function handleRegister(e) {
        e.preventDefault()

        var name = ongName.current.value
        var email = ongEmail.current.value
        var whatsapp = ongWhats.current.value
        var city = ongCity.current.value
        var uf = ongUf.current.value

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso é: ${response.data.id}`)
        } catch (err) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft className="icon" size={16} color="#E02041" />
                         Já possuo cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input ref={ongName} type="text" placeholder="Nome da ONG" />
                    <input ref={ongEmail} type="email" placeholder="E-mail" />
                    <input ref={ongWhats} type="text" placeholder="WhatsApp" />

                    <div className="input-group">
                        <input ref={ongCity} type="text" placeholder="Cidade" />
                        <input ref={ongUf} type="text" placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit" >
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}