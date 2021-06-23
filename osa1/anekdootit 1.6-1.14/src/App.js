import React, { useState } from 'react'
import ReactDOM from 'react-dom';
// import Button from './Components/Button'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  const points = [0,0,0,0,0,0,0]//new Uint8Array(anecdotes.length)
  let random = getRandom()
   
  const [selected, setSelected] = useState(random)
  //Tarkoitus on alustaa tällä jälkimmäinen tila vain kerran
  const [votes, setVotes] = useState(() =>{
    return points
  })
  //luodaan "sattumanvarainen" kokonaisluku listan anecdotes pituuteen suhteutettuna
  function getRandom(){
    return Math.floor(Math.random() * anecdotes.length)
  }
  //Tapahtumakäsittelijä jonka tarkoitus on asettaa tilaan joka kerta uusi arvo listan anecdotes pituuteen suhteutettuna.
  const handleNext = (e) => {
    e.preventDefault()
    while (true){
      if (random === selected){
        // console.log(random)
        random = getRandom()
      } else if (random !== selected) {
        setSelected(random)
        // console.log(random)
        break
      }
    }
  }

  //Tila ei päivittynyt alkuun oikein joten otettiin rumat keinot käyttöön
  //Ei hyvä ratkaisu kokonaisuudessa
  const refresh = () => {
    ReactDOM.render(<App  />, 
    document.getElementById('root'))
  }

  //Tapahtumankäsittelijä äänille sekä niiden tilalle.
  const handleVote = (e) => {
    e.preventDefault()
    const copy = votes
    copy[selected] = votes[selected] +1
    setVotes(copy)
    refresh()
  }

  return (
    <div>
      <h3>{anecdotes[selected]}</h3>
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <div>
      <button onClick={handleVote}>vote anecdote</button>
      <button onClick={handleNext}>next anecdote</button>
      </div>
      <h3>
        Anecdote with most votes
      </h3>
      {anecdotes[votes.indexOf(Math.max(...votes))]}
      <br></br>
      {Math.max(...votes)}
    </div>
  )
}

export default App