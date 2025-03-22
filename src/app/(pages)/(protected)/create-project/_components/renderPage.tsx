import React from 'react'
import {motion,AnimatePresence} from "framer-motion"

function RenderPage() {
  return (
    <AnimatePresence mode='wait'>
        <motion.div key={page}>

        RenderPage
        </motion.div>
        </AnimatePresence>
  )
}

export default RenderPage