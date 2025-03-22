import '../css/Main.css'

// import memeGeneratorLogo from '/Chef 1.png'

import { useState, useEffect } from 'react'

function Main() {
    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "http://i.imgflip.com/1bij.jpg"
    })

/*  
// Star Wars example API
fetch("https://swapi.dev/api/people/1") // fetches the object for person with the ID of 1
.then(res => res.json())
.then(data =? console.log(data))
*/

/*
Image Flip API
    imgflip.com/api
*/
    const [allMemes, setAllMemes] = useState([])

    // NOTE: the useEffect callback function can (should) return a function that will be called to clean up the side effect
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        // .then(data => console.log("returned data: ", data))
        // .then(data => console.log("returned memes: ", data.data.memes[0]))
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleTextChange(event) {
        const {name, value} = event.currentTarget   // this is called Object Destructuring. Order does not matter (but the correct spelling of the attribute does!)
        // console.log("Component: ", name, "Text Changed: ", value)
        setMeme(prevMeme => ({
            ...prevMeme, 
            [name]: value   // the [] is called computed property name and will be replaced with value of name
        }))
    }

    function getNewMemeImage(event) {
        // console.log("getNewMemeImage called")
        
        const randomNum = Math.floor(Math.random() * allMemes.length)
        // console.log("random index:", randomNum)
        // console.log(allMemes[randomNum])
        const url = allMemes[randomNum].url
        // console.log("new image url:", url)
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: url
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
                                onChange = {handleTextChange} 
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
                                onChange = {handleTextChange} 
                                value={meme.bottomText}
                            />
                        </div>
                    </div>
                    <button className="meme-button" onClick={getNewMemeImage}>Get a new meme image</button>
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