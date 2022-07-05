import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

export default props => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const Navegate = useNavigate()

    const user = require('../../data/as.json')

    function Login() {
        if (user.email === email && user.password === senha) {
            Navegate('Deu certo :)')
        }
        else {
            Navegate('ta fucionando')
        }
    }

    return (
        <div className='flex'>
            <div className='ct1'>
                <br/>
                <h2 className='txtTitlo'>Project one</h2>
                <h3>Welcome Back !</h3>
                <p>Sign in to continue to Minia.</p>
                <div className='ct2'>
                    <div className='ctInfo'>
                        <h7 className='txtInfo'>Username</h7>
                        <input className='iptInfo1' type='text' onChange={event => setEmail(event.target.value)}></input>
                        <h7 className='txtInfo'>Password</h7>
                        <div className='ctSenha'>
                            <input className='iptInfo2' type='password' onChange={event => setSenha(event.target.value)}></input>
                            <button className='checkBox1'>👁</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <button className='checkBox2'></button>
                        <p> Remember me</p>
                    </div>
                    <button className='btnLogin' onClick={Login}>Log In</button>
                </div>
                <p>- Sign in with -</p>
                <div>
                    <p>Não tem uma conta? </p>
                    <Link to='/Registro'>Inscreva-se agora</Link>
                </div>
            </div>
            <div className='ct3'>
                <p>.</p>
            </div>
        </div>
    )
}