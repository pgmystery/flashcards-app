import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

import Navigation from './Navigation'
import CardList from './CardList'
import GlobalStyle from './GlobalStyle'
import Page from './Page'
import SettingsPage from './SettingsPage'

import { getAllCards, postCard, patchCard } from './services'


export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([])

  useEffect(() => {
    getAllCards()
      .then(setCards)
      .catch(err => console.log("ERROR", err))
  }, [])

  function createCard(cardData) {
    postCard(cardData)
      .then(newCard => setCards([...cards, newCard]))
      .catch(err => console.log("ERROR", err))
  }

  function renderPage() {
    const pages = {
      0: <CardList
          cards={cards}
          title={'Home'}
          toggleBookmarked={toggleBookmarked}
        />,
      1: <CardList
          cards={cards.filter(card => card.doPractice)}
          title={'Practice'}
          toggleBookmarked={toggleBookmarked}
        />,
      2: <CardList
          cards={cards.filter(card => card.isBookmarked)}
          title={'Bookmark'}
          toggleBookmarked={toggleBookmarked}
        />,
      3: <SettingsPage onSubmit={createCard} />,
    }

    return pages[activeIndex] || <Page>404</Page>
  }

  function toggleBookmarked(card) {
    const index = cards.indexOf(card)
    patchCard(card._id, {isBookmarked: !card.isBookmarked})
      .then(changedCard => {
        setCards([
          ...cards.slice(0, index),
          changedCard,
          ...cards.slice(index + 1),
        ])
      })
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
