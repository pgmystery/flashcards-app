import React, { useState } from 'react'
import styled from 'styled-components/macro'

import BookmarkButton from './BookmarkButton'

export default function Card({ title, question, answer, isBookmarked, toggleBookmarked }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  function toggleBookmarkedClick(event) {
    event.stopPropagation()
    toggleBookmarked()
  }

  return (
    <CardStyle onClick={toggleAnswer} className="Card">
      <BookmarkButton active={isBookmarked} onClick={toggleBookmarkedClick} />
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
    </CardStyle>
  )

  function Answer({text}) {
    return (
      <React.Fragment>
        <hr />
        <p>{text}</p>
      </React.Fragment>
    )
  }
}

const CardStyle = styled.section`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 10px 10px #0002;
  position: relative;
`
