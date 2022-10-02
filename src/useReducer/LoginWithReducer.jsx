import { useState, useReducer, } from 'react';

export default function LoginUseReducer() {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='App'>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button>
              Log Out
            </button>
          </>
        ) : (
          <form className='form'>
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={username}
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
            />
            <button className='submit' type='submit' disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}