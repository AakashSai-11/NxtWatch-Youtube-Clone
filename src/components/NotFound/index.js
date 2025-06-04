import {Component} from 'react'
import UsefulContext from '../../Context/UsefulContext'
import Header from '../Header'
import SideNavbar from '../SideNavbar'
import {
  PageWrapper,
  FixedSidebar,
  ContentSection,
  FailureView,
  FailureImage,
  FailureHeading,
  FailureDescription,
} from './StyledNotFound'

class NotFound extends Component {
  render() {
    return (
      <UsefulContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <div>
              <Header />
              <PageWrapper isDark={isDark} data-testid="not-found">
                <FixedSidebar isDark={isDark}>
                  <SideNavbar />
                </FixedSidebar>
                <ContentSection isDark={isDark}>
                  <FailureView>
                    <FailureImage
                      src={
                        isDark
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      }
                      alt="not found"
                    />
                    <FailureHeading isDark={isDark}>
                      Page Not Found
                    </FailureHeading>
                    <FailureDescription isDark={isDark}>
                      We are sorry, the page you requested could not be found.
                    </FailureDescription>
                  </FailureView>
                </ContentSection>
              </PageWrapper>
            </div>
          )
        }}
      </UsefulContext.Consumer>
    )
  }
}

export default NotFound
