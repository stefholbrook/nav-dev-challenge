import React from 'react'
import { Switch, withRouter, Redirect, Route } from 'react-router-dom'

import Instructions from './components/instructions'
import LendingHealthCard from './components/lending-health-card'

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/instructions" />
    </Route>
    <Route path="/instructions" component={Instructions}/>
    <Route path="/lesson" component={LendingHealthCard}/>
  </Switch>
)

export default withRouter(Routes)
