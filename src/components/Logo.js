import React, { Component } from 'react'
import '../css/logo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Logo extends React.Component {
    render() {
        return (
            <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">ECM<FontAwesomeIcon className="logo-icon" icon={faCoffee} /></h2>
        )
    }
}

export default Logo;