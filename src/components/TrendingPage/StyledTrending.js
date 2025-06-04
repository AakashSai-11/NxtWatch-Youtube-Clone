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
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const VideoItem = styled.li`
  background-color: ${props => (props.isDark ? '#181818' : '#ffffff')};
  border-radius: 8px;
  display: flex;
  gap: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  padding: 10px;

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`

export const VideoThumbnail = styled.img`
  width: 300px;
  height: 170px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-bottom: 8px;
`

export const VideoTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin: 0 0 6px 0;
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  margin: 0 0 6px 0;
`

export const VideoStats = styled.div`
  font-size: 12px;
  color: ${props => (props.isDark ? '#909090' : '#909090')};
  display: flex;
  gap: 15px;

  p {
    margin: 0;
  }
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
