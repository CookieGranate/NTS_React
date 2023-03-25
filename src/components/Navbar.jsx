const Navbar = () => {
    return (
        <header>
            <nav id="navbar">
                <div id="left">
                    <ul>
                        <li>
                            <a href="/">
                                <img src="https://cdn.discordapp.com/attachments/1045042395634466916/1051524416426737714/nts_logo.png" alt="logo" id="logo" />
                                <p id="logotext">Night's Truck Styling</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div id="center">
                    <ul>
                        <li>
                            <a href="/partnerships">Partnerships</a>
                        </li>
                        <li>
                            <a href="/team">Team</a>
                        </li>
                        <li>
                            <a href="/application">Recruitment</a>
                        </li>
                    </ul>
                </div>

                <div id="right">
                    <div id="download">
                        <a href="/download">
                            Download App
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
