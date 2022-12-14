import React, { useReducer } from 'react';
import { logIn } from '../utils/login';

interface loginState {
    username:string;
    password: string;
    isLoggedIn: boolean;
    isLoading: boolean;
    error: string; 
}

type loginAction = 
{ type: 'login-start' | 'login-success' | 'login-done' | 'logout' } 
| { type: 'input-change-username'; payload: string }
| { type: 'input-change-password'; payload: string }
| { type: 'login-error'; payload: string }

const initialState = {
    username:'',
    password: '',
    isLoggedIn: false,
    isLoading: false,
    error: ''
}

function loginReducer (state: loginState, action: loginAction) {
    switch (action.type) {
        case 'input-change-username': 
            return {
                ...state,
                username: action.payload
            }
        case 'input-change-password': 
            return {
                ...state,
                password: action.payload
            }
        case 'login-start':
            return {
                ...state,
                isLoading: true,
            }
        case 'login-success':
            return {
                ...state,
                isLoggedIn: true,
                error: ''
            }
        case 'login-error':
            return {
                ...state,
                error: action.payload
            }
        case 'login-done':
            return {
                ...state,
                isLoading: false
            }
        case 'logout': 
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                password: ''
            }
        default:
            return state
    }
}

const LoginWithUseReducer: React.FC  = () => {
  
  const [state, dispatch] = useReducer(loginReducer, initialState)
  const { isLoggedIn, isLoading, error, username, password } = state;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch({ type: 'login-start' })

    try {
       await logIn(username, password) 
       dispatch({ type: 'login-success' })

    } catch (error) {
       dispatch({ type: 'login-error', payload: 'Wrong username or password!'})
    }
   
    dispatch({ type: 'login-done' })
  }  

  return (
    <div className='App'>
      <div className='login-container'>
        {isLoggedIn ? (
          <>
            <h1>Welcome {username}!</h1>
            <button onClick={() => dispatch({ type: 'logout' })}>
              Log Out
            </button>
          </>
        ) : (
          <form className='form' onSubmit={onSubmit}>
            {error ? <p>{error}</p> : null}
            <p>Please Login!</p>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'input-change-username', payload: e.target.value })}
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: 'input-change-password', payload: e.target.value })}
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

export default LoginWithUseReducer;