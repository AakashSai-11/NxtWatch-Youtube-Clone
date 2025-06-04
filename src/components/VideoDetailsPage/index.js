import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiFillDislike,
} from 'react-icons/ai'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import UsefulContext from '../../Context/UsefulContext'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import {
  PageWrapper,
  FixedSidebar,
  ContentSection,
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  ActionButtons,
  ActionButton,
  Separator,
  ChannelInfo,
  ChannelLogo,
  ChannelDetails,
  ChannelName,
  SubscriberCount,
  Description,
  LoaderContainer,
  FailureView,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './StyledVideoDetails'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoDetailsPage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: null,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const video = data.video_details

      const camelCaseVideo = {
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
          subscriberCount: video.channel.subscriber_count,
        },
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: camelCaseVideo,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  handleLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: prevState.isDisliked ? false : prevState.isDisliked,
    }))
  }

  handleDislike = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: prevState.isLiked ? false : prevState.isLiked,
    }))
  }

  renderVideosView = () => {
    const {videoDetails, isLiked, isDisliked} = this.state
    const {id, title, videoUrl, viewCount, publishedAt, description, channel} =
      videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    const timespan = formatDistanceToNow(new Date(publishedAt), {
      addSuffix: true,
    })

    return (
      <UsefulContext.Consumer>
        {value => {
          const {isDark, savedVideosList, addSavedVideo, removeSavedVideo} =
            value
          const isSaved = savedVideosList.some(each => each.id === id)

          return (
            <div>
              <Header />
              <PageWrapper isDark={isDark} data-testid="videoItemDetails">
                <FixedSidebar isDark={isDark}>
                  <SideNavbar />
                </FixedSidebar>
                <ContentSection isDark={isDark}>
                  <VideoPlayerContainer>
                    <ReactPlayer
                      url={videoUrl}
                      controls
                      width="100%"
                      height="400px"
                    />
                    <VideoTitle isDark={isDark}>{title}</VideoTitle>
                    <VideoStats isDark={isDark}>
                      <p>{viewCount} views</p>
                      <p>{timespan}</p>
                    </VideoStats>
                    <ActionButtons>
                      <ActionButton
                        type="button"
                        onClick={this.handleLike}
                        active={isLiked}
                        isDark={isDark}
                      >
                        {isLiked ? (
                          <AiFillLike color="#2563eb" />
                        ) : (
                          <AiOutlineLike />
                        )}
                        Like
                      </ActionButton>
                      <ActionButton
                        type="button"
                        onClick={this.handleDislike}
                        active={isDisliked}
                        isDark={isDark}
                      >
                        {isDisliked ? (
                          <AiFillDislike color="#2563eb" />
                        ) : (
                          <AiOutlineDislike />
                        )}
                        Dislike
                      </ActionButton>
                      <ActionButton
                        type="button"
                        onClick={
                          isSaved
                            ? () => removeSavedVideo(videoDetails)
                            : () => addSavedVideo(videoDetails)
                        }
                        active={isSaved}
                        isDark={isDark}
                      >
                        {isSaved ? (
                          <MdPlaylistAddCheck color="#2563eb" />
                        ) : (
                          <MdPlaylistAdd />
                        )}
                        {isSaved ? 'Saved' : 'Save'}
                      </ActionButton>
                    </ActionButtons>
                    <Separator isDark={isDark} />
                    <ChannelInfo>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                      <ChannelDetails>
                        <ChannelName isDark={isDark}>{name}</ChannelName>
                        <SubscriberCount isDark={isDark}>
                          {subscriberCount} subscribers
                        </SubscriberCount>
                        <Description isDark={isDark}>{description}</Description>
                      </ChannelDetails>
                    </ChannelInfo>
                  </VideoPlayerContainer>
                </ContentSection>
              </PageWrapper>
            </div>
          )
        }}
      </UsefulContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <UsefulContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureView>
            <FailureImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDark={isDark}>
              We are having some trouble processing your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.fetchData}>
              Retry
            </RetryButton>
          </FailureView>
        )
      }}
    </UsefulContext.Consumer>
  )

  renderData = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideosView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return this.renderData()
  }
}

export default VideoDetailsPage
