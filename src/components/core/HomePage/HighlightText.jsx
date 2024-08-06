import React from 'react'

export default function HighlightText({text}) {
  return (
    <span className='font-bold text-lightred-400 gap'>
    {" "}   {text}
    </span>
  )
}
