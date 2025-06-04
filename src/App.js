import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import UsefulContext from './Context/UsefulContext'
import Login from './components/Login'
import Home from './components/Home'
import TrendingPage from './components/TrendingPage'
import GamingPage from './components/GamingPage'
import VideoDetailsPage from './components/VideoDetailsPage'
import SavedvideosPage from './components/SavedvideosPage'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

class App extends Component {
  state = {
    savedVideosList: [],
    isDark: false,
  }

  changeTheme = () => {
    this.setState(prev => {
      const {isDark} = prev
      return {isDark: !isDark}
    })
  }

  addSavedVideo = video => {
    this.setState(prev => {
      const {savedVideosList} = prev
      const index = savedVideosList.findIndex(item => item.id === video.id)
      if (index === -1) {
        return {savedVideosList: [...savedVideosList, video]}
      }
      return null
    })
  }

  removeSavedVideo = video => {
    this.setState(prev => {
      const {savedVideosList} = prev
      const filteredList = savedVideosList.filter(each => each.id !== video.id)
      return {savedVideosList: filteredList}
    })
  }

  render() {
    const {savedVideosList, isDark} = this.state
    return (
      <UsefulContext.Provider
        value={{
          savedVideosList,
          isDark,
          addSavedVideo: this.addSavedVideo,
          removeSavedVideo: this.removeSavedVideo,
          changeTheme: this.changeTheme,
        }}
      >
        <div>
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={TrendingPage} />
            <ProtectedRoute exact path="/gaming" component={GamingPage} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedvideosPage}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoDetailsPage}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </UsefulContext.Provider>
    )
  }
}

export default App
