import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaSearch} from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'
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
  BannerContainer,
  BannerContent,
  CloseButton,
  SearchContainer,
  SearchInput,
  SearchButton,
  VideoList,
  VideoItem,
  VideoThumbnail,
  VideoDetails,
  ChannelLogo,
  VideoTitle,
  ChannelName,
  VideoStats,
  FailureView,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  LoaderContainer,
  EmptyViewContainer,
  EmptyImage,
  EmptyHeading,
  EmptyDescription,
} from './StyledHome'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    searchResults: [],
    isPrime: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  searchHandler = event => {
    this.setState({searchInput: event.target.value})
  }

  triggerSearch = () => {
    this.fetchData()
  }

  fetchData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  removeBanner = () => {
    this.setState({isPrime: false})
  }

  renderBanner = () => (
    <BannerContainer data-testid="banner">
      <BannerContent>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
        <button type="button">GET IT NOW</button>
      </BannerContent>
      <CloseButton
        type="button"
        onClick={this.removeBanner}
        data-testid="close"
      >
        <MdCancel />
      </CloseButton>
    </BannerContainer>
  )

  renderVideosView = () => {
    const {searchResults, searchInput, isPrime} = this.state
    return (
      <UsefulContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <div>
              <Header />
              <PageWrapper isDark={isDark}>
                <FixedSidebar>
                  <SideNavbar />
                </FixedSidebar>
                <ContentSection>
                  {isPrime && this.renderBanner(isDark)}
                  <SearchContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.searchHandler}
                      placeholder="Search"
                      isDark={isDark}
                    />
                    <SearchButton onClick={this.triggerSearch} isDark={isDark}>
                      <FaSearch />
                    </SearchButton>
                  </SearchContainer>

                  {searchResults.length === 0 ? (
                    <EmptyViewContainer isDark={isDark}>
                      <EmptyImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                        alt="no videos"
                      />
                      <EmptyHeading>No Search Results Found</EmptyHeading>
                      <EmptyDescription>
                        Try different keywords or remove the search filter
                      </EmptyDescription>
                    </EmptyViewContainer>
                  ) : (
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
                        const {name, profileImageUrl} = channel
                        const timespan = formatDistanceToNow(
                          new Date(publishedAt),
                          {addSuffix: true},
                        )

                        return (
                          <Link
                            to={`/videos/${id}`}
                            key={id}
                            style={{textDecoration: 'none', color: 'inherit'}}
                          >
                            <VideoItem>
                              <VideoThumbnail
                                src={thumbnailUrl}
                                alt="video thumbnail"
                              />
                              <VideoDetails>
                                <ChannelLogo
                                  src={profileImageUrl}
                                  alt="channel logo"
                                />
                                <div>
                                  <VideoTitle isDark={isDark}>
                                    {title}
                                  </VideoTitle>
                                  <ChannelName>{name}</ChannelName>
                                  <VideoStats>
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
                  )}
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
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>
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

export default Home
