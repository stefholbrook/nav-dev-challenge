import React, { Component } from 'react'
import styled from 'styled-components'

import LendingHealthCard from './components/lending-health-card'
import SideNav from './components/side-nav'

export const Layout = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;
`

export const Aside = styled.aside`
  height: 100%;
  width: 328px;
  padding: 42px;
  background-color: #fff;
  flex-shrink: 0;
  overflow: auto;
`

const SideBarWrapper = styled.div`
  width: 328px;
  flex-shrink: 0;
  margin-right: 1rem;
`

const SideBar = styled(Aside)`
  position: fixed;
`

class App extends Component {
  render () {
    return (
      <Layout>
        <SideBarWrapper>
          <SideBar>
            <SideNav />
          </SideBar>
        </SideBarWrapper>
        <LendingHealthCard>
          <h1>oooooo aaaaah</h1>
        </LendingHealthCard>
      </Layout>
    )
  }
}

export default App
