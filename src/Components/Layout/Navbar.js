import { Link } from 'react-router-dom'

import Container from './Container'
import Style from './Navbar.module.css'
import logo from '../../Imgs/costs_logo.png'


function Navbar() {
    return (
        <nav className={Style.navbar}>
            <Container>
                <Link to='/'>
                    <img src={logo} alt='Logo da empresa Costs' />
                </Link>

                <ul className={Style.list}> 
                    <li className={Style.list}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={Style.list}>
                        <Link to='/Projects'>Projetos</Link>
                    </li>
                    <li className={Style.list}>
                        <Link to='/Company'>Empresa</Link>
                    </li>
                    <li className={Style.list}>
                        <Link to='/Contact'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar