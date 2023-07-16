import React from 'react'

export default function ImageEditor(props: any) {
  return (
    <div className='image__editor' style={{display: props.display}}>
        {props.ImageEditorContent}
    </div>
  )
}
