import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'
import RegisterContext from './context/RegisterContext'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here

class App extends Component {
  state = {isRegistered: false, name: ''}

  changeRegistration = () => {
    this.setState({isRegistered: true})
  }

  changeName = name => {
    this.setState({name})
  }

  render() {
    const {isRegistered, name} = this.state
    return (
      <RegisterContext.Provider
        value={{
          isRegistered,
          name,
          changeRegistration: this.changeRegistration,
          changeName: this.changeName,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
