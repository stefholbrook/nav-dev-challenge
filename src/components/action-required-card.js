import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import SmallBizIcon from './small-biz-icon'

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

const Header = styled.h1`
  font-family: Averta, Helvetica, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: #444751;
  font-weight: bold;
`

const StyledCard = styled('div')`
  border: 1px solid #D0D2D6;
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 16px;
  justify-content: center;
  flex: 1 1 auto;
  padding: 32px;
  border-radius: 4px;
  text-align: center;

  & > * {
    margin: 0 auto;
  }

  & > ${SmallBizIcon} {
    color: #D9A380;
    width: 100px;
  }

  & > ${Copy} {
    max-width: none;
  }

  & + & {
    margin-top: 8px;
  }
`

export const Icon = styled.img`
  width: 100px;
`

export const Plus = styled.span`
  position: relative;
  display: inline-block;

  &::before {
    content: '+';
    font-size: 1.4em;
    display: inline-block;
    line-height: .87; /* magic alignment number :shrug: */
    width: 1em;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid currentcolor;
    display: inline-block;
    width: 1.4em;
    height: 1.4em;
    line-height: : 1;

  }
`

export class ActionRequiredCard extends Component {
  render () {
    // const info = select(type)(cardInfo)

    return (
      <StyledCard>
        <SmallBizIcon />
        <Header size='sm'>Add your business</Header>
        <Copy>For term loan options, add your business</Copy>
        <Plus /> Add
      </StyledCard>
    )
  }
}

export default styled(ActionRequiredCard)``
