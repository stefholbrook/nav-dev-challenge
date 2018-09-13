import React from 'react'
import styled from 'styled-components'

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

const Container = styled.div`
  flex: 1 1 100%;
  flex-wrap: wrap;
  border-top: 1px solid #D0D2D6;
  margin-top: 8px;

  &:last-of-type {
    padding-bottom: 8px;
    border-bottom: 1px solid #D0D2D6;
  }
`

const HeaderSection = styled.div`
  display: flex;
  flex: 1 1 100%;
  padding: 8px 0 0;
`

const Value = styled(Copy)`
  margin-left: auto;
  margin-right: 24px;
  padding-left: 8px;
`

const Requirement = ({ title, value }) => {
  return(
    <Container>
      <HeaderSection>
        <Copy>{title}</Copy>
        <Value>{value}</Value>
        {/* <IndicatorDot status={status} /> */}
      </HeaderSection>
    </Container>
  )
}

export default Requirement
