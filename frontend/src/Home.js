import React, { useState, useEffect } from "react";
import aboutMyPage from "./images/about-my-page.jpg"
import badSyndrome from "./images/bad-syndrome.jpg"
import boobHospital from "./images/boob-hospital.jpg"
import fluffyCow from "./images/boob-hospital.jpg"
import funnyBush from "./images/funny-bush.jpg"
import georgeBush911 from "./images/george-bush-911.jpg"
import goldenRetriever911 from "./images/golden-retriever-911.jpg"
import gorillaDinosaur from "./images/gorilla-vs-dinosaur.jpg"
import horny from "./images/horny.jpg"
import monkeyNuts from "./images/monkey-nuts.jpg"
import pain from "./images/pain.jpg"
import { getRandomIntInclusive } from "./utils/randomNumber";

/*
    ~Eventual funtionality I would like to add:
        -Displays a random set of images, in a grid and clicking on an image changes it to another random image
            -import all images from /images and have each declarating contained in an array
            -onClick chooses a random number from 0-imageArray.length and displays the corresponding image
        -some way for site visitors to write a message that is permanently displayed, possibly just in  a basic list with a timestamp
*/

const imageArray = [
    aboutMyPage,
    badSyndrome,
    boobHospital,
    fluffyCow,
    funnyBush,
    georgeBush911,
    goldenRetriever911,
    gorillaDinosaur,
    horny,
    monkeyNuts,
    pain
]

function Home() {
    const [imageNumber, setImageNumber] = useState(null)
    useEffect(() => {
        let randomNumber = getRandomIntInclusive(0,imageArray.length)
        setImageNumber(randomNumber)
        console.log(imageNumber)
    },[])

    function clickHandler() {
        let randomNumber = getRandomIntInclusive(0, imageArray.length)
        setImageNumber(randomNumber)
        console.log(imageNumber)
    }


    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <img onClick={clickHandler} src={imageArray[imageNumber]}/>
                    <a style={{textDecoration: 'none', color: 'black', textAlign: 'center'}} href="/">click here!.</a>
                </div>
            </div>
        </div>
    )
}

export default Home