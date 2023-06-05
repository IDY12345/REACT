import React from 'react'

function Hero({Heroname}) {
    if(Heroname === 'Joker'){
        throw new Error('Not a Hero!')
    }
  return (
    <div>
        {Heroname}
    </div>
  )
}

export default Hero