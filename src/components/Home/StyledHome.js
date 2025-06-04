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
`

export const ContentSection = styled.div`
  flex-grow: 1;
  height: 100vh;
  overflow-y: auto;
  padding: 20px;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  max-width: 500px;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: none;
  outline: none;
  background-color: ${props => (props.isDark ? '#313131' : '#ffffff')};
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const SearchButton = styled.button`
  padding: 10px;
  background-color: ${props => (props.isDark ? '#424242' : '#d7dfe9')};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
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
  display: flex;
  margin-top: 10px;
  gap: 10px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  margin: 0;
`

export const ChannelName = styled.p`
  font-size: 14px;
  margin: 0;
  color: #64748b;
`

export const VideoStats = styled.div`
  display: flex;
  gap: 10px;
  font-size: 12px;
  color: #7e858e;
`

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 50px;
`

export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h2`
  margin-top: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const FailureDescription = styled.p`
  color: #7e858e;
`

export const RetryButton = styled.button`
  margin-top: 12px;
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const EmptyViewContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
`

export const EmptyImage = styled.img`
  width: 250px;
  margin-bottom: 20px;
`

export const EmptyHeading = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`

export const EmptyDescription = styled.p`
  font-size: 14px;
  color: #64748b;
  margin-bottom: 20px;
`
