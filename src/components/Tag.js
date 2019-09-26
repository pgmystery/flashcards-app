import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'


Tag.propTypes = {
  text: PropTypes.string.isRequired,
}

function Tag({ text }) {
  return (
    <TagStyled>
      {text}
    </TagStyled>
  )
}

const TagStyled = styled.div`
  display: inline-block;
  padding: 10px;
  margin: 5px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 10%;
  text-align: center;
`


export default Tag
