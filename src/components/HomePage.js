import React from 'react'
import Card from './Card'
import Page from './Page'

export default function HomePage({ cards }) {
  return (
    <Page>
      <h1>Homepage</h1>
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </Page>
  )
}
