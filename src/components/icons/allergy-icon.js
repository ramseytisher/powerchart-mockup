import React from "react"

import { Icon, Tooltip } from "antd"

export default ({ allergy }) => {
  switch (allergy) {
    case "drug":
      return (
        <Tooltip title="Drug Allergy">
          <Icon type="disconnect" />
        </Tooltip>
      )
    case "food":
      return (
        <Tooltip title="Food Allergy">
          <Icon type="apple" />
        </Tooltip>
      )
    case "insect":
      return (
        <Tooltip title="Insect Allergy">
          <Icon type="bug" />
        </Tooltip>
      )
    case "latex":
      return (
        <Tooltip title="Latex Allergy">
          <Icon type="flag" />
        </Tooltip>
      )
    case "seasonal":
      return (
        <Tooltip title="Seasonal Allergy">
          <Icon type="branches" />
        </Tooltip>
      )
    case "animal":
      return (
        <Tooltip title="Animal Allergy">
          <Icon type="qq" />
        </Tooltip>
      )
    default:
      return null
  }
}
