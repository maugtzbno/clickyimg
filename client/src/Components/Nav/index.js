import React from "react";

function Nav() {
    return (
        <nav>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Clicky Game</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Click an image to begin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Score and Top Score</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

