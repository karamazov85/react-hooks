import { useReducer, } from 'react';
import { logIn } from '../utils/login';


const initialState = {
    username:'',
    password: '',
    isLoggedIn: false,
    isLoading: false,
    error: ''
}

export function loginReducer (state, action) {
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
                isLoggedIn: false
            }
        default:
            return state
    }
}

export default function LoginWithUseReducer() {
  
  const [state, dispatch] = useReducer(loginReducer, initialState)

  const onSubmit = async (e) => {
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

  const { isLoggedIn, isLoading, error, username, password } = state;

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
              onChange={(e) => dispatch({ type: 'input-change-username', payload: e.target.value })}
            />
            <input
              type='password'
              placeholder='password'
              autoComplete='new-password'
              value={password}
              onChange={(e) => dispatch({ type: 'input-change-password', payload: e.target.value })}
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