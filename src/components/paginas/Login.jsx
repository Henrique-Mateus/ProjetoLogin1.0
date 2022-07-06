import '../../styles/TelasIniciais.css'
import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

export default props => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const Navegate = useNavigate()

    return (
        <div className='flex'>
            <div className='ct1'>
                <br/>
                <h2 className='txtTitlo'>Project One</h2>
                <h3>Welcome Back !</h3>
                <p>Sign in to continue to Project One.</p>
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
                    <button className='btnLogin' to="/Home">Log In</button>
                </div>
                <p>- Sign in with -</p>
                <p>Não tem uma conta? <Link to='/Registro'>Inscreva-se agora</Link></p>
            </div>
            <div className='ct3'>
                <p>.</p>
            </div>
        </div>
    )
}