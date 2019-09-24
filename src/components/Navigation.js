import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation({ buttonTexts, rootText }) {
  return (
    <NavigationStyled className="Navigation">
      <LinkStyled exact to="/">
        {rootText}
      </LinkStyled>
      {buttonTexts.map((text, index) => (
        <LinkStyled to={"/" + text.toLowerCase()} key={index} >
          {text}
        </LinkStyled>
      ))}
    </NavigationStyled>
  )
}

const LinkStyled = styled(NavLink)`
  font-size: 2em;
  flex-grow: 1;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgray;

  &.active {
    background: hotpink;
  }
`

const NavigationStyled = styled.nav`
  display: flex;

  button {
    font-size: 2em;
    flex-grow: 1;
  }
`
