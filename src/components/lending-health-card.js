import React, { Component } from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

export const StyledCard = styled.div`
  position: relative;
  flex: 1 1 100%;
  padding: 24px;
  border-radius: 4px;
  background-color: #fff;
  overflow: Hidden;
  box-shadow: 0 0 3px 0 #D0D2D6, 0 1px 2px 0 #D0D2D6;
`

export const HeightController = styled.div`
  ${({setHeight}) => setHeight ? `height: ${setHeight}px` : ''};
  overflow-x: hidden;
  overflow-y: visible;
  transition: height ease-in-out 0.18s;
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

export const CardBody = styled.div`
  padding-bottom: 32px;

  ${Copy} {
    max-width: 520px;
  }
`

class LendingHealthCard extends Component {
  constructor () {
    super()
    this.state = { contentHeight: 0 }

    this.setHeight = this.setHeight.bind(this)
  }

  setRef = (name) => (ref) => {
    this[name] = ref
  }

setHeight = debounce(
    () => {
      const element = findDOMNode(this.contents)
      element && this.setState({ contentHeight: element.scrollHeight })
    },
    500,
    { trailing: true }
  )

  render () {
    const { children } = this.props
    const { contentHeight } = this.state

    return (
      <StyledCard>
        <HeightController setHeight={contentHeight}>
          <CardBody>
          {/* <CardBody ref={this.setRef('contents')}> */}
            {children}
          </CardBody>
        </HeightController>
      </StyledCard>
    )
  }
}
export default LendingHealthCard
