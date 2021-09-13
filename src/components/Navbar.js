import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    let invertMode = props.mode === 'light' ? 'dark' : 'light';
    const [colorDisplay, setColorDisplay] = useState('d-none')

    const changeBgRed = () => {
        document.body.style.backgroundColor = '#381515';
        document.body.style.color = 'white';
        props.setButtonColor('danger');
    }

    const changeBgGreen = () => {
        document.body.style.backgroundColor = '#051f0c';
        document.body.style.color = 'white';
        props.setButtonColor('success');
    }

    const changeBgBlue = () => {
        document.body.style.backgroundColor = '#001d3a';
        document.body.style.color = 'white';
        props.setButtonColor('primary');
    }

    const toggleDisplay = () => {
        if (colorDisplay == 'd-block') {
            setColorDisplay('d-none');
        }
        else {
            setColorDisplay('d-block');
        }
    }

    const handleToggle = () => {
        props.toggleMode();
        toggleDisplay();
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" href="#">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" to="/about">{props.aboutText}</a>
                        </li> */}
                    </ul>

                    <div className={`color-container me-5 ${colorDisplay}`} >
                        <span className="me-3">Color Theme</span>
                        <button onClick={changeBgRed} className="badge border-0 mx-2 rounded-pill bg-danger">R</button>
                        <button onClick={changeBgGreen} className="badge border-0 mx-2 rounded-pill bg-success">G</button>
                        <button onClick={changeBgBlue} className="badge border-0 mx-2 rounded-pill bg-primary">B</button>
                    </div>

                    <div className={`form-check form-switch text-${invertMode}`}>
                        <input className="form-check-input" onClick={handleToggle} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${invertMode} Mode`}</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Insert title here",
    aboutText: "about"
}
