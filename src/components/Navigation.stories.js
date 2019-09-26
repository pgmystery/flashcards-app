import React from 'react';
import Navigation from './Navigation';
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Navigation',
  decorators: [RouterWrapper]
}

function RouterWrapper(storyFn) {
  return <Router>{storyFn()}</Router>
}

export const standard = () => 
  <Navigation
    rootText={'Home'}
    buttonTexts={['Practice', 'Bookmarks', 'Settings']}
  />


standard.story = {
  name: 'Default'
}
