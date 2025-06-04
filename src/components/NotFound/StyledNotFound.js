import styled from 'styled-components'

export const PageWrapper = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const FixedSidebar = styled.div`
  width: 280px;
  height: 100vh;
  position: sticky;
  top: 0;
  flex-shrink: 0;
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  border-right: 1px solid ${props => (props.isDark ? '#424242' : '#cccccc')};
`

export const ContentSection = styled.div`
  flex-grow: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
`

export const FailureImage = styled.img`
  width: 200px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin-bottom: 10px;
`

export const FailureDescription = styled.p`
  font-size: 16px;
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  margin-bottom: 20px;
`
