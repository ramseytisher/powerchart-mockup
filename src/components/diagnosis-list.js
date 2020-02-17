import React from "react"
import styled from "styled-components"

import { Row, Col, Tag, Badge } from "antd"

const DiagnosisText = styled.p`
  font-size: 0.8rem;
  margin: 0;
`
const DiagnosisCode = styled.p`
  font-size: 0.8rem;
  margin: 0;
`

export default ({ list }) => {
  const primary = list.filter(item => item.primary)
  const nta = list.filter(item => item.tags.indexOf("NTA") !== -1)
  const slp = list.filter(item => item.tags.indexOf("SLP") !== -1)
  const other = list.filter(item => (!item.primary || item.tags.length === 0))

  return (
    <Row type="flex" gutter={8} justify="space-between">
      <Col>
        {primary.length > 0 ? (
          <>
            <DiagnosisText>{primary[0].description}</DiagnosisText>
            <Row type="flex" gutter={4} align="middle">
              <Col>
                <DiagnosisCode>{primary[0].code}</DiagnosisCode>
              </Col>
              <Col>
                <Tag color="#00A8E1">Primary</Tag>
              </Col>
            </Row>
          </>
        ) : (
          <Tag color="red">No Primary Diagnosis Set</Tag>
        )}
      </Col>
      <Col>
        <Tag>NTA: {nta.length}</Tag>
        <Tag>SLP: {slp.length}</Tag>
        <br />
        <Tag>Other: {other.length}</Tag>
      </Col>
    </Row>
  )
}
