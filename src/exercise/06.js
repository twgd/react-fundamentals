// Basic Forms
// http://localhost:3000/isolated/exercise/06.js
// 2. 💯 Validate lower-case

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  const [error, setError] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const value = usernameInputRef.current.value
    onSubmitUsername(value)
  }

  const handleChange = e => {
    const value = e.target.value
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={usernameInputRef}
          id="usernameInput"
          type="text"
          onChange={handleChange}
        />
      </div>
      <div style={{color: 'red'}} role="alert">
        {error}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
