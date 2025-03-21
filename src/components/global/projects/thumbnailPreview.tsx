import { Slide,Theme } from '@/lib/types'
import React from 'react'

type Props ={
    slide?:Slide,
    theme:Theme
}

function ThumbnailPreview({slide,theme}:Props) {
  return (
    <div
    style={{
        fontFamily:theme.fontFamily,
        color:theme.accentColor,
        backgroundColor:theme.backgroundColor,
        backgroundImage:theme.gradientBackground
    }}
    >

    </div>
  )
}

export default ThumbnailPreview