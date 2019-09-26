import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './Navigation'
import CardListPage from './CardListPage'
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

  const HomePage = withCardListPage('Homepage')
  const PracticePage = withCardListPage('Practice', 'doPractice')
  const BookmarksPage = withCardListPage('Homepage', 'isBookmarked')

  return (
    <>
      <GlobalStyle />
      <Router>
      <AppStyle>
        <Page>
          <Route exact path="/" render={HomePage} />
          <Route exact path="/practice" render={PracticePage} />
          <Route exact path="/bookmarks" render={BookmarksPage} />
          <Route exact path="/settings" render={() => <SettingsPage onSubmit={createCard} />} />
        </Page>
        <Navigation
          rootText={'Home'}
          buttonTexts={['Practice', 'Bookmarks', 'Settings']}
        />
      </AppStyle>
    </ Router>
    </>
  )

  function createCard(cardData) {
    postCard(cardData)
      .then(newCard => setCards([...cards, newCard]))
      .catch(err => console.log("ERROR", err))
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

  function withCardListPage(title, filterProp) {
    return () => {
      const filteredCards = filterProp ? cards.filter(card => card[filterProp]) : cards
      return <CardListPage title={title} cards={filteredCards} toggleBookmarked={toggleBookmarked} />
    }
  }
}


const AppStyle = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
