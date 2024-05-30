
import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContexProvider'

function App() {
  

  return (
    <UserContextProvider>
    <h1> Context Api In React</h1>

    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
