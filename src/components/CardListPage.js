import React from 'react'
import Card from './Card'

export default function CardListPage({ cards, title, toggleBookmarked }) {
  return (
    <>
      <h1>{title}</h1>
      {cards.map((card) => (
        <Card
          key={card._id}
          id={card._id}
          title={card.title}
          question={card.question}
          answer={card.answer}
          toggleBookmarked={() => toggleBookmarked(card)}
          isBookmarked={card.isBookmarked}
        />
      ))}
    </>
  )
}
