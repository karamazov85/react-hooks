import React from 'react'
import LoginWithUseReducer from './useReducer/LoginWithUseReducer';
import UseContext from './useContext/UseContext'
import { ThemeContextProvider } from './useContext/ThemeContextProvider';


function App() {
  return (
    <div className="App">
      <h1>Login with UseReducer</h1>
      <LoginWithUseReducer />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1>Theme Switch with UseContext</h1>
      <ThemeContextProvider>
        <UseContext />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
