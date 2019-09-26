import React, { useState } from 'react'
import styled from 'styled-components/macro'

import BookmarkButton from './BookmarkButton'
import PropTypes from 'prop-types'

Card.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool,
  onBookmarkClicked: PropTypes.func,
}

Card.defaultProps = {
  title: '(No title)',
  question: '(No question)',
  answer: '(No answer)',
}

export default function Card({ title, question, answer, isBookmarked, onBookmarkClicked }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  function toggleBookmarkClick(event) {
    event.stopPropagation()
    if (onBookmarkClicked) {
      onBookmarkClicked()
    }
  }

  return (
    <CardStyle onClick={toggleAnswer} className="Card">
      {onBookmarkClicked && <BookmarkButton active={isBookmarked} onClick={toggleBookmarkClick} />}
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
