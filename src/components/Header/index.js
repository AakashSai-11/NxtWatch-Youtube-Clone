import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {BsSun} from 'react-icons/bs'
import UsefulContext from '../../Context/UsefulContext'
import {
  HeaderContainer,
  Logo,
  RightContainer,
  IconButton,
  ProfileImage,
  LogoutButton,
  PopupContainer,
  PopupButton,
} from './HeaderStyled'

class Header extends Component {
  logoutFunction = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  renderLogout = isDark => (
    <Popup modal trigger={<LogoutButton isDark={isDark}>Logout</LogoutButton>}>
      {close => (
        <PopupContainer isDark={isDark}>
          <p>Are you sure you want to logout?</p>
          <div style={{marginTop: '12px'}}>
            <PopupButton onClick={() => close()}>Cancel</PopupButton>
            <PopupButton confirm onClick={this.logoutFunction}>
              Confirm
            </PopupButton>
          </div>
        </PopupContainer>
      )}
    </Popup>
  )

  render() {
    return (
      <UsefulContext.Consumer>
        {value => {
          const {isDark, changeTheme} = value
          return (
            <HeaderContainer isDark={isDark}>
              <Link to="/">
                <Logo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>
              <RightContainer>
                <IconButton onClick={changeTheme} isDark={isDark}>
                  {isDark ? <BsSun /> : <FaMoon />}
                </IconButton>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                {this.renderLogout(isDark)}
              </RightContainer>
            </HeaderContainer>
          )
        }}
      </UsefulContext.Consumer>
    )
  }
}

export default withRouter(Header)
