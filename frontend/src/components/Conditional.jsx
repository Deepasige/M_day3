import {useState} from 'react'

const Conditional = () => {
    const[isVisible,setVisible]=useState(true)
    return(
        <div>
            <button onClick={()=>setVisible(!isVisible)}> Toggle </button>
            {isVisible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Repellendus minima, cumque similique accusantium facilis velit ad voluptatibus
                  atque quod 
                perferendis autem quibusdam error eius unde. Commodi, facere! Ducimus, fuga culpa?</p>}
        </div>
    )
}

export default Conditional