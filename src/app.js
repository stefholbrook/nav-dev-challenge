import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
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
  padding: 52px;
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
        <LendingHealthCard />
      </Layout>
    )
  }
}

export default hot(module)(App)
