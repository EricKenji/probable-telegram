import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className="flex-row justify-center align-center px-2">
            <a href="https://github.com.erickenji">
                <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>
            <a href="https://linkedin.com">
                <FontAwesomeIcon icon="fa-brands fa-linkedin" />
            </a>
            <a href="https://stackoverflow.com">
                <FontAwesomeIcon icon="fa-brands fa-stack-overflow" />            </a>
        </footer>
    )
}