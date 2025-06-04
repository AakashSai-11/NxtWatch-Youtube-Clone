import styled from 'styled-components'

export const MainHeading = styled.h1`
  display: flex;
  align-items: center;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  gap: 8px;
  font-size: 24px;
  margin-bottom: 20px;
`

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

export const VideoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin-top: 20px;
`

export const VideoItem = styled.li`
  width: 300px;
  text-decoration: none;
`

export const VideoThumbnail = styled.img`
  width: 100%;
  border-radius: 6px;
`

export const VideoDetails = styled.div`
  margin-top: 10px;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin: 0;
`

export const VideoStats = styled.div`
  font-size: 12px;
  color: #7e858e;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`

export const FailureView = styled.div`
  text-align: center;
  padding: 40px 20px;
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

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #4338ca;
  }
`
