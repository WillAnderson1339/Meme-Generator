import '../css/Main.css'

// import memeGeneratorLogo from '/Chef 1.png'

import { useState } from 'react'

function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

    function handleChange(event) {
        const {value, name} = event.currentTarget
        console.log("Text Changed: ", value)
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name]: value
        }))
    }

    return (
        <main>
            <div className="meme-container">
                <div className="meme-form">
                    <div className="meme-form-row">
                        <div className="meme-form-input-group">
                            <label htmlFor="topText">Top Text</label>
                            <input 
                                type="text" 
                                placeholder="One does not simply"
                                id="topText" 
                                name="topText" 
                                onChange = {handleChange} 
                                value={meme.topText}
                            />
                        </div>

                        <div className="meme-form-input-group">
                            <label htmlFor="bottomText">Bottom Text</label>
                            <input 
                                type="text" 
                                placeholder="Walk into Mordor"
                                id="bottomText" 
                                name="bottomText" 
                                onChange = {handleChange} 
                                value={meme.bottomText}
                            />
                        </div>
                    </div>
                    <button className="meme-button">Get a new meme image</button>
                </div>

                <div className="meme">
                    <img src={meme.imageUrl} alt="Meme Image"/>
                    <span className="topText">{meme?.topText||""}</span>  { /* this provides a blank value if meme is not loaded yet */ }
                    <span className="bottomText">{meme.bottomText}</span>
                </div>
          </div>
        </main>
    )
}

export default Main