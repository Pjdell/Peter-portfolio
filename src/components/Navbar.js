import '../styles/Navbar.css';
import { useState } from 'react';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">
            <h2 className="logo">My Portfolio</h2>

            <button
                className={`hamburger ${open ? 'is-active' : ''}`}
                aria-label="Toggle navigation"
                aria-expanded={open}
                onClick={() => setOpen(!open)}
            >
                <span />
                <span />
                <span />
            </button>

            <ul className={`nav-links ${open ? 'open' : ''}`}>
                <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
                <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
                <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
        </nav>

    );
}

export default Navbar;