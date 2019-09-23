import React from 'react'
import styled from 'styled-components/macro'

export default function Page({ children }) {
  return (
    <PageStyled>{children}</PageStyled>
    )
}

const PageStyled = styled.main`
  padding: 20px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
`
