import React from 'react'
import styled from 'styled-components'

const Text = styled.span`
  font-family: Roboto, Helvetica, sans-serif;
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  font-style: ${({ italic }) => italic ? 'italic' : 'normal'};
`

const StyledTab = styled.div`
  display: flex;
  align-self: stretch;
  flex-flow: row wrap;
  padding: 8px;
  border-right: 1px solid #D0D2D6;
  background: ${({ isActive }) => isActive ? '#D0D2D6' : '#FFF'};
  cursor: pointer;

  &:last-of-type {
    border-right: none;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:first-of-type {
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }

  & span {
    flex: 1 1 100%;
    align-self: flex-end;
    text-align: center;
  }
`

const Icon = styled.img`
  width: 24px;
  height: auto;
  margin: 8px auto
`

const Tab = (props) => {
  const { copy, icon, isActive } = props

  return (
    <StyledTab isActive={isActive} {...props}>
      {icon && <Icon src={icon} />}
      <Text>{copy}</Text>
    </StyledTab>
  )
}

export default Tab
