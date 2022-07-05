import React from 'react'

export default props => {
    const user = require('../../data/as.json')

    return (
        <div>
            <p>{user.nome} esta modificado no email {user.email} com a senha {user.password}</p>
            <h1>Esta funcionando</h1>
        </div>
    )
}