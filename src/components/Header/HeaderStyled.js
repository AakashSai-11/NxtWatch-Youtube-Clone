import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`

export const Logo = styled.img`
  width: 120px;
`

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`

export const PopupContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  color: ${props => (props.isDark ? '#f1f5f9' : '#0f172a')};
  padding: 24px 32px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 300px;
`

export const PopupButton = styled.button`
  padding: 8px 16px;
  margin: 0 8px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${props => (props.confirm ? '#3b82f6' : '#cbd5e1')};
  color: ${props => (props.confirm ? '#ffffff' : '#1e293b')};
  font-weight: 500;

  &:hover {
    background-color: ${props => (props.confirm ? '#2563eb' : '#e2e8f0')};
  }
`
