import React, { useState, useEffect } from 'react'

const API_URL = 'http://api.icndb.com/jokes/random'

function App() {
    const [joke, setJoke] = useState('')

    const generateJoke = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => setJoke(data.value.joke))
    }

    useEffect(() => {
        generateJoke()
    }, [])

    return ( <
        div className = 'box' >
        <
        h3 > Chuck Norris Jokes Generator < /h3> <
        p dangerouslySetInnerHTML = {
            { __html: joke } }
        /> <
        button onClick = { generateJoke } >
        Get new joke <
        span role = 'img' > 😂 < /span> <
        /button> <
        /div>
    )
}

export default App