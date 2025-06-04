import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaFire} from 'react-icons/fa'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import UsefulContext from '../../Context/UsefulContext'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import {
  PageWrapper,
  FixedSidebar,
  ContentSection,
  VideoList,
  VideoItem,
  VideoThumbnail,
  VideoDetails,
  VideoTitle,
  ChannelName,
  VideoStats,
  LoaderContainer,
  FailureView,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  MainHeading,
} from './StyledTrending'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class TrendingPage extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchResults: [],
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const camelCaseVideos = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        channel: {
          name: video.channel.name,
          profileImageUrl: video.channel.profile_image_url,
        },
        viewCount: video.view_count,
        publishedAt: video.published_at,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        searchResults: camelCaseVideos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderVideosView = () => {
    const {searchResults} = this.state
    return (
      <UsefulContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div>
              <Header />
              <PageWrapper isDark={isDark} data-testid="trending">
                <FixedSidebar isDark={isDark}>
                  <SideNavbar />
                </FixedSidebar>
                <ContentSection isDark={isDark}>
                  <MainHeading isDark={isDark}>
                    <FaFire color="red" /> Trending
                  </MainHeading>
                  <VideoList>
                    {searchResults.map(each => {
                      const {
                        id,
                        title,
                        thumbnailUrl,
                        channel,
                        viewCount,
                        publishedAt,
                      } = each
                      const {name} = channel
                      const timespan = formatDistanceToNow(
                        new Date(publishedAt),
                        {
                          addSuffix: true,
                        },
                      )

                      return (
                        <Link
                          to={`/videos/${id}`}
                          key={id}
                          style={{textDecoration: 'none', color: 'inherit'}}
                        >
                          <VideoItem isDark={isDark}>
                            <VideoThumbnail
                              src={thumbnailUrl}
                              alt="video thumbnail"
                            />
                            <VideoDetails>
                              <div>
                                <VideoTitle isDark={isDark}>{title}</VideoTitle>
                                <ChannelName isDark={isDark}>
                                  {name}
                                </ChannelName>
                                <VideoStats isDark={isDark}>
                                  <p>{viewCount} views</p>
                                  <p>{timespan}</p>
                                </VideoStats>
                              </div>
                            </VideoDetails>
                          </VideoItem>
                        </Link>
                      )
                    })}
                  </VideoList>
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
      <Loader type="ThreeDots" color="#3b82f6" height={50} width={50} />
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

export default TrendingPage
