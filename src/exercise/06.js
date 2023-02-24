// Basic Forms
// http://localhost:3000/isolated/exercise/06.js
// 3. 💯 Control the input value

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [username, setUsername] = React.useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = e => {
    const {value} = e.target
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={username}
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
