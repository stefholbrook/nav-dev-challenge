import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
`

const StyledLink = styled(Link)`
  display: block;
  padding: 13px 0 16px;
  margin-bottom: 24px;
  border-bottom: 1px solid #d0d2d6;
`

const Nav = styled.nav`
  flex-grow: 1;
  grid-column: 1 / -1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`

const List = styled.ul`
  padding: 0;
`

const Icon = styled.i`
  padding: 0 16px;
`

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  margin: 16px 0;
  font-family: Averta, sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #444751;
  border-left: 4px solid #fff;

  &.is-active,
  &:active,
  &:focus,
  &:hover {
    border-left: 4px solid #0091ea;
  }
`

export const isActive = (match, { pathname = '' } = {}) =>
  pathname.includes('/partner/reports')

export const SideNav = ({ isPremium }) => (
  <Wrapper>
    <StyledLink to=''>
      <img
        src='https://dxkdvuv3hanyu.cloudfront.net/images/logo-nav-primary.svg'
        height='25'
        alt='Nav'
      />
    </StyledLink>
    <Nav>
      <List>
        <li>
          <StyledNavLink
            activeClassName='is-active'
            to={''}
            isActive={isActive}
          >
            <Icon>
              {/* <ScoreDialIcon /> */}
            </Icon>
            Score
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            activeClassName='is-active'
            to='/partner/financing/credit-cards'
          >
            <Icon>
              {/* <CreditCardIcon /> */}
            </Icon>
            Credit Cards
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            activeClassName='is-active'
            to=''
          >
            <Icon>
              {/* <MoneyIcon /> */}
            </Icon>
            Business loans
          </StyledNavLink>
        </li>
      </List>
    </Nav>
  </Wrapper>
)

// The withRouter needs to be the last HOC called!
export default SideNav
// export default withRouter(SideNav)
