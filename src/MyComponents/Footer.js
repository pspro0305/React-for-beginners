import React from 'react'
import './Footer.css'

export const Footer = () => {
    let foterStyle = {
        position: "initial",
        width: "100%",
        top: "100vh",
        border: "2px solid red"
    }
    return (
        <footer className="bg-dark text-light py-3 my-3" style={foterStyle}>
            <p className="text-center">
                Copyright &copy; PSPro0305
            </p>

        </footer>
    )
}
