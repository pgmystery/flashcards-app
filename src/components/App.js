import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'
import CardList from './CardList'
import GlobalStyle from './GlobalStyle'
import Page from './Page'
import SettingsPage from './SettingsPage'

import { getAllCards, postCard, patchCard } from './services'


export default function App() {
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

  function renderPage(index) {
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

    // return pages[activeIndex] || <Page>404</Page>
    return pages[index] || <Page>404</Page>
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
      <Router>
      <AppStyle>
        <Page>
          <Route exact path="/" component={() => renderPage(0) } />
          <Route exact path="/practice" component={() => renderPage(1) } />
          <Route exact path="/bookmarks" component={() => renderPage(2) } />
          <Route exact path="/settings" component={() => renderPage(3) } />
        </Page>
        <Navigation
          rootText={'Home'}
          buttonTexts={['Practice', 'Bookmarks', 'Settings']}
        />
      </AppStyle>
    </ Router>
    </>
  )
}


const AppStyle = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
