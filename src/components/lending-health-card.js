import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import debounce from 'lodash/debounce'

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
`

const Header = styled.h1`
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
    margin: 8px 0;
  }
  ${'' /* & > ${Requirement} {
    margin-top: 8px;
  } */}
  ${'' /* & > ${TabGroup} {
    margin-bottom: 8px;
  } */}
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
    this.state = {
      contentHeight: 0,
      currentView: 'creditCard'
    }

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
    const { contentHeight, currentView } = this.state

    return (
      <StyledCard>
        <HeightController setHeight={contentHeight}>
          <CardBody ref={this.setRef('contents')}>
            <Grid>
            <TabMenu currentView={currentView} tabClick={this.tabClick} />
            {/* {
              !isLoading &&
              !isIdVerified && (
                <ActionRequiredCard type='idVerify' />
              )
            } */}
            {/* {
              currentView === 'termLoan' && (
                <ActionRequiredCard
                  type='addBusiness'
                  copy='For term loan options, add your business' />
              )
            } */}
            {/* {
              !isLoading &&
              !activeBusinessId &&
              currentView === 'lineOfCredit' && (
                <ActionRequiredCard
                  type='addBusiness'
                  copy='For line of credit options, add your business' />
              )
            } */}
            {/* {
              !isLoading && isIdVerified &&
              (activeBusinessId || */}
                {/* !['termLoan', 'lineOfCredit'].includes(currentView)) && ( */}
                <Fragment>
                  <StatusCard
                    // status={reportStatus}
                    // statusMessage={reportStatusMessage}
                  />
                  {/* <Header size='md'>Here’s what issuers are looking for</Header> */}
                  {/* {requirements.map((requirement, index) => (
                    <Requirement
                      key={index}
                      title={requirement.label}
                      worstValue={requirement.worstValue}
                      bestValue={requirement.bestValue}
                      targetValue={requirement.targetValue}
                      currentValue={requirement.currentValue}
                      valuePrefix={requirement.valuePrefix}
                      valueSuffix={requirement.valueSuffix}
                      failCopy={requirement.failureCopy}
                      canAddInfo={['annualRevenue', 'timeInBusiness'].includes(requirement.type)}
                      missingInfoOnClick={this.missingInfoOnClick(
                        requirement.type,
                        requirement.label
                      )}
                    />
                  ))} */}
                </Fragment>
              {/* )
            } */}
          </Grid>
          </CardBody>
        </HeightController>
      </StyledCard>
    )
  }
}
export default LendingHealthCard
