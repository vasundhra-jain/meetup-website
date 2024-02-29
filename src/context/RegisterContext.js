import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  name: '',
  changeRegistration: () => {},
  changeName: () => {},
})

export default RegisterContext
