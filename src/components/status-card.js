import React from 'react'
import styled from 'styled-components'
// import * as theme from '../../../../common/styles/theme'
import get from 'lodash/get'

// import { Markdown, Copy } from '../../../../common/base-components'

const colors = {
  pass: '#DCE8E3',
  needsInfo: '#FBE8D9',
  fail: '#F0E5E7',
  default: '#FFFFFF'
}

export const Markdown = styled.div`

  hr {
    width: 100%;
    margin: 0;
    border-top: 1px solid #D0D2D6;
    border-style: solid;
  }

  & > * {
    &:first-child {
      padding-top: 0;
      margin-top: 0;
    }
    &:last-child {
      padding-bottom: 0;
      margin-bottom: 0;
    }
  }
`

const Copy = styled.p`
  font-family: Roboto, Helvetica, sans-serif;
  display: block;
  margin: 0;
  padding: 0;
  color: #444751;
  font-size: 16px;
  line-height: normal;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};

  strong {
    font-family: Roboto, Helvetica, sans-serif;
  }
`

export const StyledStatusCard = styled.div`
  flex: 1 1 100%;
  padding: 16px;
  background-color: #DCE8E3;
  border-radius: 4px;

  & ${Copy} {
    display: flex;
    max-width: none;
  }

  a {
    margin-left: auto;
  }
`

export const StatusCard = ({ link, linkLabel }) => {
  return (
    <StyledStatusCard>
      <Markdown>
        <h3>Yay! You qualify for a credit card 🎉</h3>
        <Copy>A credit card is a great option for you right now.</Copy>
      </Markdown>
    </StyledStatusCard>
  )
}

export default styled(StatusCard)``
