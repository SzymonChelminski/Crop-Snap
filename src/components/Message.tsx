import React from 'react'

export default function Message(props: any) {
  return (
    <div className='message__logOut' style={{top: props.messageDisplay}}>
        <span>
            {props.message}
        </span>
        <button onClick={props.closeMessageDisplay}>
            Understood!
        </button>
    </div>
  )
}
