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

export const VideoPlayerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const VideoTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin: 16px 0 8px;
`

export const VideoStats = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #7e858e;
  margin-bottom: 16px;
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`
export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  font-size: 14px;
  color: ${props => {
    if (props.active) {
      return '#2563eb'
    }
    if (props.isDark) {
      return '#cccccc'
    }
    return '#606060'
  }};
  cursor: pointer;

  &:hover {
    color: #2563eb;
  }
`


export const Separator = styled.hr`
  border: 1px solid ${props => (props.isDark ? '#424242' : '#e5e5e5')};
  margin: 16px 0;
`

export const ChannelInfo = styled.div`
  display: flex;
  gap: 16px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ChannelName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin: 0;
`

export const SubscriberCount = styled.p`
  font-size: 14px;
  color: #7e858e;
  margin: 0;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => (props.isDark ? '#cccccc' : '#606060')};
  margin: 0;
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
