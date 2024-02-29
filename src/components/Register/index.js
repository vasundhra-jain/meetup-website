import {Component} from 'react'
import RegisterContext from '../../context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {inputValue: '', error: ''}

  changeInputValue = event => {
    this.setState({inputValue: event.target.value})
  }

  register = () => (
    <RegisterContext.Consumer>
      {value => {
        const {changeRegistration, changeName} = value
        const {inputValue} = this.state
        if (inputValue === '') {
          this.setState({error: 'Please enter your name'})
        } else {
          changeRegistration()
          changeName(inputValue)
          const {history} = this.props
          history.replace('/')
        }
      }}
    </RegisterContext.Consumer>
  )

  render() {
    const {inputValue, error} = this.state
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png "
            alt="website register"
          />
          <div>
            <h1>Let us join</h1>
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              onChange={this.changeInputValue}
              value={inputValue}
            />
            <label htmlFor="topic">TOPICS</label>
            <select id="topic">
              {topicsList.map(each => (
                <option key={each.id}>{each.displayText}</option>
              ))}
            </select>
            <button type="button" onClick={this.register}>
              Register Now
            </button>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
