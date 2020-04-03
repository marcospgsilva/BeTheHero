import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

import LogoImg from '../../assets/logo.svg'

export default function NewIncident() {

    const titleRef = useRef(null)
    const descriptionRef = useRef(null)
    const valueRef = useRef(null)

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    async function handleNewIncident(e) {
        e.preventDefault()

        const data = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            value: valueRef.current.value
        }

        try {

            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')

        } catch (err) {
            alert('Erro ao cadastrar Incidente, tente novamente.')
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero" />
                    <h1>Cadastrar Novo Caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft className="icon" size={16} color="#E02041" />
                     Voltar para Home
                </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input ref={titleRef} type="text" placeholder="Titulo do Caso" />
                    <textarea ref={descriptionRef} placeholder="Descrição" />

                    <input ref={valueRef} placeholder="Valor em Reais" />

                    <button className="button" type="submit" >
                        Cadastrar
                </button>
                </form>
            </div>
        </div>
    )
}