import React, { useState } from "react"

import { Icon, Popover, Result, Badge } from "antd"

const Hospice = () => (
  <Result status="500" title="Hmm.." subTitle="Haven't got this far" />
)

export default ({ specific }) => {
  const [info, setInfo] = useState(null)

  switch (specific) {
    case "hospice":
      return (
        <Popover title="Hospice" content={<Hospice />}>
          <Icon type="medicine-box" />
        </Popover>
      )
    case "admission-today":
      return (
        <Popover title="Admission Today" content={<Hospice />}>
          <Icon type="user-add" />
        </Popover>
      )
    case "discharge-today":
      return (
        <Popover title="Discharge Today" content={<Hospice />}>
          <Icon type="user-delete" />
        </Popover>
      )
    case "no-care-plan":
      return (
        <Popover title="No Care Plan" content={<Hospice />}>
          <Badge dot>
            <Icon type="paper-clip" />
          </Badge>
        </Popover>
      )
    default:
      return null
  }
}
