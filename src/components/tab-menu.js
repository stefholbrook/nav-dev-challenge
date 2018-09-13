import React from 'react'
import styled from 'styled-components'

import Tab from './tab'

export const TabGroup = styled.div`
  display: flex;
  flex: 1 1 100%;
  border: 1px solid #D0D2D6;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;

  & > * {
    flex: 1 1 100px;
  }
`

export const TabMenu = ({ currentView, tabClick }) => {
  return (
    <TabGroup>
      <Tab
        isActive={currentView === 'creditCard'}
        icon={`https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/credit-card-${currentView === 'creditCard' ? 'dark' : 'light'}.svg`}
        copy='Credit card'
        onClick={() => tabClick('creditCard')} />
      <Tab
        isActive={currentView === 'termLoan'}
        icon={`https://dxkdvuv3hanyu.cloudfront.net/design-assets/icons/pbr/loan-${currentView === 'termLoan' ? 'dark' : 'light'}.svg`}
        copy='Term loan'
        onClick={() => tabClick('termLoan')} />
    </TabGroup>
  )
}

export default TabMenu
