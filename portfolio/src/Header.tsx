import { FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import self from './icon1.png'

const Header = () => {
    return(
        <section className="header">
            <section className="introduction">
                <h1>Hey, it's Alina!</h1>
                <p>Designer and frontend enthusiast.</p>
                <div className="icons">
                    <FaLinkedin size={30} />
                    <FaGithubSquare size={30} />
                </div>
            </section>
            <section className="introduction-image">
                <img src={self}></img>
            </section>
        </section>
    )
}

export default Header;