import styled from 'styled-components'

export const SidebarContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 20px;
  min-height: 100vh;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  margin-bottom: 4px; 
  cursor: pointer;
  background-color: ${props => {
    if (props.isActive) {
      return props.isDark ? '#383838' : '#d7dfe9'
    }
    return 'transparent'
  }};
  border-radius: 6px;
`

export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px; 
`

export const NavIcon = styled.div`
  font-size: 20px;
  margin-right: 10px;
  color: inherit;
`

export const NavText = styled.p`
  font-size: 16px;
  color: inherit;
  margin: 0;
  font-weight: 500;
`

export const ContactSection = styled.div`
  margin-top: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const LogoIcons = styled.div`
  display: flex;
  gap: 8px;
  margin: 8px 0;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.5;
`
