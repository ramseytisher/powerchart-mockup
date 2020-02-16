import React from "react"

import { Icon, Tooltip } from "antd"

export default ({ allergy }) => {
  switch (allergy) {
    case "allergy":
      return (
        <Tooltip title="Allergy">
          <Icon type="apple" />
        </Tooltip>
      )
    default:
      return null
  }
}
