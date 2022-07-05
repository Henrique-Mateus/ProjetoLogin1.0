import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Login from '../components/paginas/Login'
import Registro from '../components/paginas/Cadastro'
import Home from "../components/paginas/Home"

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Login />} />
                <Route path='/Registro' exact element={<Registro />} />
                <Route path='/Home' exact element={<Home />} />
            </Routes>
        </Router>
    )
}