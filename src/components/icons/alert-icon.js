import React from "react"

import { Icon, Badge } from "antd"

export default ({ alert }) => {
  switch (alert) {
    case "no-bm-72":
      return <Icon type="alert" />
    case "fall-risk":
      return <Icon type="down" />
    case "behavior":
      return <Icon type="frown" />
    case "cog":
      return <Icon type="reddit" />
    case "skin":
      return <Icon type="heat-map" />
    case "fluid-decline":
      return <Icon type="fall" />
    case "review-careplan":
      return <Icon type="folder" />
    case "urinary-cath":
      return <Icon type="filter" />
    case "wander":
      return <Icon type="compass" />
    case "weight-vary":
      return <Icon type="stock" />
    case "skin-2":
      return <Icon type="disconnect" />
    default:
      return null
  }
}
