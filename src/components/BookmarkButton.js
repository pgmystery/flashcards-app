import React from 'react'
import styled from  'styled-components/macro'

export default function BookmarkButton({ active, onClick }) {
  const BookmarkButtonComponent = active
    ? BookmarkButtonActiveStyled
    : BookmarkButtonStyled
  return <BookmarkButtonComponent onClick={onClick} />
}

const BookmarkButtonStyled = styled.div`
  position: absolute;
    right: 10px;
    top: -10px;
    width: 30px;
    height: 20px;
    background: black;
    
    :after {
      position: absolute;
      content: '';
      border: 15px solid black;
      top: 100%;
      left:0;
      right:0;
      border-bottom-color: transparent;
    }
`

const BookmarkButtonActiveStyled = styled(BookmarkButtonStyled)`
  background: hotpink;

  :after {
    border-color: hotpink;
    border-bottom-color: transparent;
  }
`
