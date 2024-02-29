import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, name} = value
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
            alt="website logo"
          />
          <div>
            {isRegistered ? <h1>Hello {name}</h1> : <h1>Welcome to Meetup</h1>}
            {isRegistered ? (
              <p>Welcome to Education and Learning</p>
            ) : (
              <p>Please register for the topic</p>
            )}
            {isRegistered ? (
              ''
            ) : (
              <Link to="/register">
                <button type="button">Register</button>
              </Link>
            )}

            <img
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </div>
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
