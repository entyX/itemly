import React from 'react'

import PropTypes from 'prop-types'

import './login.css'

const Login = (props) => {
  return <div className={`login-container ${props.rootClassName} `}></div>
}

Login.defaultProps = {
  rootClassName: '',
}

Login.propTypes = {
  rootClassName: PropTypes.string,
}

export default Login
