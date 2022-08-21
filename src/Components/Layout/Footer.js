import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Style from './Footer.module.css'

function Footer() {
    return (
        <footer className={Style.footer}>
            <ul className={Style.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaInstagram />
                </li>
            </ul>
            <p className={Style.copy_right}><span>Costs</span> &copy; 2022</p>
        </footer>
    )
}

export default Footer