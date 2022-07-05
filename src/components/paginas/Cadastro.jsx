import '../../styles/TelasIniciais.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default props => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const Navegate = useNavigate()

    const user = require('../../data/as.json')

    function Cadastra() {
        if (user.email === email || user.nome === nome) {
            Navegate('Deu ruim :(')
        }
        else {
            user.email = email
            user.nome = nome
            user.password = senha
            Navegate('/Home')
        }
    }

    return (
        <div className='flex'>
            <div className='ct1'>
                <br/>
                <h2 className='txtTitlo'>Project One</h2>
                <h3>Welcome !</h3>
                <p>Registre in to continue to Project One.</p>
                <div className='ct2'>
                    <div className='ctInfo'>
                        <h7 className='txtInfo'>UserEmail</h7>
                        <input className='iptInfo1' type='email' onChange={event => setEmail(event.target.value)}></input>
                        <h7 className='txtInfo'>UserName</h7>
                        <input className='iptInfo1' type='text' onChange={event => setNome(event.target.value)}></input>
                        <h7 className='txtInfo'>Password</h7>
                        <div className='ctSenha'>
                            <input className='iptInfo2' type='password' onChange={event => setSenha(event.target.value)}></input>
                            <button className='checkBox1'>👁</button>
                        </div>
                    </div>
                    <p>Ao se registrar, você concorda com os <Link to='/Registro'>Termos de Uso do Minia</Link></p>
                    <button className='btnLogin' onClick={Cadastra}>Log In</button>
                </div>
                <p>- Sign in with -</p>
                <p>Já tem uma conta? <Link to='/'>Log In agora</Link></p>
            </div>
            <div className='ct3'>
                <p>.</p>
            </div>
        </div>
    )
}
