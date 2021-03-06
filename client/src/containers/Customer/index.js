import React from 'react'
import {
  Switch,
  Route,
  withRouter
} from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { PerWarranty } from 'components/PerWarranty'
import { LinkedActions } from 'components/LinkedActions'
import { CreateWarranty } from 'components/CreateWarranty'
import { GuaranteeWarranty } from 'components/GuaranteeWarranty'

const PerWarrantyWithRouter = withRouter(PerWarranty)
const DashboardWithRouter = withRouter(Dashboard)
const LinkedActionsWithRouter = withRouter(LinkedActions)

export const Customer = (props) => {
  const { match } = props
  const { path } = match
  const linked = (<LinkedActionsWithRouter list="customer" level="../../../" />)
  return (
    <Switch>
      <Route path={path + 'create/'}>
        {linked}
        <CreateWarranty />
      </Route>
      <Route path={path + 'warranty/:id/'}>
        {linked}
        <PerWarrantyWithRouter />
      </Route>
      <Route path={path + 'guarantee/'}>
        {linked}
        <GuaranteeWarranty />
      </Route>
      <Route>
        {linked}
        <DashboardWithRouter />
      </Route>
    </Switch>
  )
}
