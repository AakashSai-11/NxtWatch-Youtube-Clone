import styled from 'styled-components'

export const LoginBg = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContainer = styled.form`
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
  padding: 40px;
  border-radius: 12px;
  box-shadow: ${props =>
    props.isDark
      ? '0 0 12px rgba(255, 255, 255, 0.1)'
      : '0 0 12px rgba(0, 0, 0, 0.1)'};
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin: 0 auto 32px auto;
  display: block;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  font-size: 14px;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin-bottom: 6px;
  font-weight: 600;
`

export const Input = styled.input`
  padding: 10px 14px;
  font-size: 14px;
  border: 1px solid #d7dfe9;
  border-radius: 6px;
  outline: none;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const CheckboxLabel = styled.label`
  font-size: 13px;
  margin-top: 10px;
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 600;
  padding: 12px 0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 13px;
  margin-top: 10px;
`
