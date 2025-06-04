import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {FaHome, FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import UsefulContext from '../../Context/UsefulContext'
import {
  SidebarContainer,
  NavItem,
  NavIcon,
  NavText,
  ContactSection,
  LogoIcons,
  Description,
  NavList,
} from './StyledSidebar'

class SideNavbar extends Component {
  render() {
    const {location} = this.props
    const currentPath = location.pathname

    return (
      <UsefulContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <SidebarContainer isDark={isDark}>
              <NavList>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <NavItem isDark={isDark} isActive={currentPath === '/'}>
                    <NavIcon>
                      <FaHome />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                </Link>

                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <NavItem
                    isDark={isDark}
                    isActive={currentPath === '/trending'}
                  >
                    <NavIcon>
                      <FaFire />
                    </NavIcon>
                    <NavText>Trending</NavText>
                  </NavItem>
                </Link>

                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <NavItem isDark={isDark} isActive={currentPath === '/gaming'}>
                    <NavIcon>
                      <SiYoutubegaming />
                    </NavIcon>
                    <NavText>Gaming</NavText>
                  </NavItem>
                </Link>

                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <NavItem
                    isDark={isDark}
                    isActive={currentPath === '/saved-videos'}
                  >
                    <NavIcon>
                      <MdPlaylistAdd />
                    </NavIcon>
                    <NavText>Saved Videos</NavText>
                  </NavItem>
                </Link>
              </NavList>

              <ContactSection isDark={isDark}>
                <p>CONTACT US</p>
                <LogoIcons>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linkedin logo"
                  />
                </LogoIcons>
                <Description>
                  Enjoy! Now to see your channels and recommendations!
                </Description>
              </ContactSection>
            </SidebarContainer>
          )
        }}
      </UsefulContext.Consumer>
    )
  }
}

export default withRouter(SideNavbar)
