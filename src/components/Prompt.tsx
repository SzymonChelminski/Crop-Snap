import React from 'react'

export default function Prompt(props: any) {
  return (
    <div className='prompt__container' style={{top: props.promptTop}}>
        <p>
            Paste in image url:
        </p>
        <input type="text" onChange={props.handlePrompt} placeholder='url'/>
        <span>
             <button onClick={props.handleButtonAccept}>
                ACCEPT
            </button>
            <button onClick={props.handleButtonClose}>
                CLOSE
            </button>
        </span>
    </div>
  )
}
