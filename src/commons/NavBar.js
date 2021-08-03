import React from 'react';

import './NavBar.css';




function NavBar() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item px-4">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="/blogs">Blogs</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="/projects">Projects</a>
                        </li>
                        <li class="nav-item px-4">
                            <a class="nav-link" href="/about">About Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default NavBar;