import React, { useState } from 'react'
import styled from 'styled-components/macro'

import BookmarkButton from './BookmarkButton'
import Tag from './Tag'
import PropTypes from 'prop-types'

Card.propTypes = {
  title: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool,
  onBookmarkClicked: PropTypes.func,
  tags: PropTypes.array,
}

Card.defaultProps = {
  title: '(No title)',
  question: '(No question)',
  answer: '(No answer)',
  tags: []
}

export default function Card({ title, question, answer, isBookmarked, onBookmarkClicked, tags }) {
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
      {tags.map((tag, index) => <Tag text={tag} key={index}/>)}
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
