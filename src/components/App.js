import React, { useState } from 'react'
import styled from 'styled-components/macro'

import Navigation from './Navigation'
import HomePage from './HomePage'
import GlobalStyle from './GlobalStyle'
import Page from './Page'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!',
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!',
    },
  ])

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <Page>Practice</Page>,
      2: <Page>Bookmarks</Page>,
      3: <Page>Settings</Page>,
    }

    return pages[activeIndex] || <Page>404</Page>
  }

  return (
    <>
    <GlobalStyle />
    <AppStyle className="App">
      {renderPage()}
      <Navigation
        buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']}
        onClick={setActiveIndex}
      />
    </AppStyle>
    </>
  )
}

const AppStyle = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
