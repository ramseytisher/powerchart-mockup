import React, { useState } from "react"

import { Icon, Popover } from "antd"

const HighRisk = () => (
  <>
    <p>
      High risk medications are drugs that have a heightened risk of causing
      significant patient harm when they are used in error.
    </p>
  </>
)

export default ({ med }) => {
  const [info, setInfo] = useState(null)

  switch (med) {
    case "high-risk-med":
      return (
        <Popover title="High Risk Medication" content={<HighRisk />}>
          <Icon type="alert" />
        </Popover>
      )
    default:
      return null
  }
}
