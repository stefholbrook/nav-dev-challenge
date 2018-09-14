import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

import ActionRequiredCard from './action-required-card'
import requirements from '../data.json'
import Requirement from './requirement'
import StatusCard from './status-card'
import TabMenu from './tab-menu'

export const StyledCard = styled.div`
  position: relative;
  flex: 0 1 50%;
  padding: 24px;
  border-radius: 4px;
  background-color: #fff;
  overflow: Hidden;
  box-shadow: 0 0 3px 0 #D0D2D6, 0 1px 2px 0 #D0D2D6;
  margin-top: 42px;
`

const Header = styled.h3`
  font-family: Averta, Helvetica, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  color: #444751;
  font-weight: bold;
`

const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 100%;
  width: 100%;

  & > ${StatusCard}, & > ${Header} {
    margin: 16px 0;
  }

  ${'' /* & > ${Requirement} {
    margin-top: 8px;
  } */}
`

const HeightController = styled.div`
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
    this.state = {
      contentHeight: 0,
      currentView: 'creditCard'
    }

    this.setHeight = this.setHeight.bind(this)
  }

  setRef = (name) => (ref) => {
    this[name] = ref
  }

  tabClick = (target) => {
    this.setState(() => ({ currentView: target }))
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
    const { contentHeight, currentView } = this.state

    return (
      <StyledCard>
        <HeightController setHeight={contentHeight}>
          <CardBody ref={this.setRef('contents')}>
            <Grid>
            <TabMenu currentView={currentView} tabClick={this.tabClick} />
            {currentView === 'termLoan' && (
              <ActionRequiredCard />
            )}
            {currentView === 'creditCard' && (
                <Fragment>
                  <StatusCard />
                  <Header>Here’s what issuers are looking for</Header>
                  {requirements.map((requirement, index) => (
                    <Requirement
                      key={index}
                      title={requirement.title}
                      value={requirement.value} />
                  ))}
                </Fragment>
            )
            }
          </Grid>
          </CardBody>
        </HeightController>
      </StyledCard>
    )
  }
}
export default LendingHealthCard
