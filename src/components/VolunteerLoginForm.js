import React, { useState } from 'react'

const VolunteerLoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const submitLogin = (e) => {
    e.preventDefault()
    console.log("login")
  }

  return (
    <>
      <form onSubmit={submitLogin}>
        <label>
          username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          password
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit"/>
      </form>
    </>
  )
}

export { VolunteerLoginForm as default }