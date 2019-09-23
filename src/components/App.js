import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import Navigation from './Navigation'
import HomePage from './HomePage'
import GlobalStyle from './GlobalStyle'
import Page from './Page'
import SettingsPage from './SettingsPage'

import { getAllCards, postCard } from './services'


export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCards()
      .then(cards => setCards(cards))
  }, [])

  function handleSubmit(data) {
    // postCard(data).then(newCard => setCards([...cards, newCard]))
    setCards([...cards, data])
    postCard(data)
  }

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <Page>Practice</Page>,
      2: <Page>Bookmarks</Page>,
      3: <SettingsPage onSubmit={handleSubmit} />,
    }

    return pages[activeIndex] || <Page>404</Page>
  }

  return (
    <>
    <GlobalStyle />
    <AppStyle>
      <Page>
        {renderPage()}
      </Page>
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
