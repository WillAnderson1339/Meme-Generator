import '../css/Header.css'

import trollFace from '/troll-face.png'

// import memeGeneratorLogo from '/Chef 1.png'

function Header() {
    return (
        <header>
            {/* <img className="nav-image" src={memeGeneratorLogo} alt="Meme Generator Logo"/> */}
            <img src={trollFace} alt="Troll Face" />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header
