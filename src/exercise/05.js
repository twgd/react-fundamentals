// Styling
// http://localhost:3000/isolated/exercise/05.js
// 2. 💯 accept a size prop to encapsulate styling

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, className = '', style, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClassName} ${className}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    ></div>
  )
}

const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
