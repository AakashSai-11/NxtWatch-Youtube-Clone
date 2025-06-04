import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import UsefulContext from '../../Context/UsefulContext'
import {
  LoginBg,
  FormContainer,
  WebsiteLogo,
  Label,
  InputContainer,
  Input,
  CheckboxLabel,
  LoginButton,
  ErrorMsg,
} from './Login'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    isChecked: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  handleChecked = () => {
    this.setState(prev => ({
      isChecked: !prev.isChecked,
    }))
  }

  renderPasswordField = isDark => {
    const {password, isChecked} = this.state
    return (
      <InputContainer>
        <Label htmlFor="password" isDark={isDark}>
          PASSWORD
        </Label>
        <Input
          type={isChecked ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          isDark={isDark}
        />
        <CheckboxLabel isDark={isDark}>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={this.handleChecked}
          />{' '}
          Show Password
        </CheckboxLabel>
      </InputContainer>
    )
  }

  renderUsernameField = isDark => {
    const {username} = this.state
    return (
      <InputContainer>
        <Label htmlFor="username" isDark={isDark}>
          USERNAME
        </Label>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
          isDark={isDark}
        />
      </InputContainer>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <UsefulContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginBg isDark={isDark}>
              <FormContainer onSubmit={this.submitForm} isDark={isDark}>
                <WebsiteLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                {this.renderUsernameField(isDark)}
                {this.renderPasswordField(isDark)}
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginBg>
          )
        }}
      </UsefulContext.Consumer>
    )
  }
}

export default LoginForm
