import React from "react"

import { Icon, Tooltip } from "antd"

export default ({ diet }) => {
  switch (diet) {
    case "fluid-restrict":
      return (
        <Tooltip title="Fluid Restriction">
          <Icon type="scan" />
        </Tooltip>
      )
    case "npo":
      return (
        <Tooltip title="NPO">
          <Icon type="thunderbolt" />
        </Tooltip>
      )
    default:
      return null
  }
}
