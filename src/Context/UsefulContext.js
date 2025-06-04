import React from 'react'

const UsefulContext = React.createContext({
  isDark: false,
  savedVideosList: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
  changeTheme: () => {},
})

export default UsefulContext
