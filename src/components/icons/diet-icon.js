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
    case "consistency":
      return (
        <Tooltip title="Consistency/Thickening">
          <Icon type="radius-setting" />
        </Tooltip>
      )
    case "npo":
      return (
        <Tooltip title="NPO">
          <Icon type="thunderbolt" />
        </Tooltip>
      )
    case "feeding-tube":
      return (
        <Tooltip title="Feeding Tube">
          <Icon type="enter" />
        </Tooltip>
      )
    case "incontinence":
      return (
        <Tooltip title="Incontinence/Toileting Program">
          <Icon type="twitter" />
        </Tooltip>
      )
    default:
      return null
  }
}
