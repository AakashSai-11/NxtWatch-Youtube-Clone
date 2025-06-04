import {Component} from 'react'
import {MdPlaylistAdd} from 'react-icons/md'
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
  ChannelLogo,
  VideoTitle,
  ChannelName,
  VideoStats,
  FailureView,
  FailureImage,
  FailureHeading,
  FailureDescription,
  MainHeading,
} from './StyledSavedvideos'

class SavedvideosPage extends Component {
  renderVideosView = () => (
    <UsefulContext.Consumer>
      {value => {
        const {isDark, savedVideosList} = value
        const videos = Array.isArray(savedVideosList) ? savedVideosList : []

        if (videos.length === 0) {
          return (
            <div>
              <Header />
              <PageWrapper isDark={isDark} data-testid="saved-videos">
                <FixedSidebar isDark={isDark}>
                  <SideNavbar />
                </FixedSidebar>
                <ContentSection isDark={isDark}>
                  <FailureView>
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <FailureHeading isDark={isDark}>
                      No Saved Videos Found
                    </FailureHeading>
                    <FailureDescription isDark={isDark}>
                      You can save your videos while watching them.
                    </FailureDescription>
                  </FailureView>
                </ContentSection>
              </PageWrapper>
            </div>
          )
        }

        return (
          <div>
            <Header />
            <PageWrapper isDark={isDark} data-testid="saved-videos">
              <FixedSidebar isDark={isDark}>
                <SideNavbar />
              </FixedSidebar>
              <ContentSection isDark={isDark}>
                <MainHeading isDark={isDark}>
                  <MdPlaylistAdd color="red" /> Saved Videos
                </MainHeading>
                <VideoList>
                  {videos.map(each => {
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
                            <ChannelLogo
                              src={profileImageUrl}
                              alt="channel logo"
                            />
                            <div>
                              <VideoTitle isDark={isDark}>{title}</VideoTitle>
                              <ChannelName isDark={isDark}>{name}</ChannelName>
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

  render() {
    return this.renderVideosView()
  }
}

export default SavedvideosPage
