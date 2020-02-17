import React from "react"
import styled from "styled-components"

import { Row, Col, Tag, Badge, Popover } from "antd"

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
  const other = list.filter(item => !item.primary || item.tags.length === 0)

  return (
    <Row type="flex" gutter={4} justify="space-between" align="middle">
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
                {primary[0].clinical === "Return To Provider" ? (
                  <Tag color="#EF7622">Return To Provider</Tag>
                ) : (
                  <Tag color="#6D3075">{primary[0].clinical}</Tag>
                )}
              </Col>
            </Row>
          </>
        ) : (
          <Tag color="red">No Primary Diagnosis Set</Tag>
        )}
      </Col>
      <Col>
        <Popover
          title="NTA Diagnosis"
          content={<pre>{JSON.stringify(nta, null, 2)}</pre>}
        >
          <Tag color={nta.length > 0 && "#5C6770"}>NTA: {nta.length}</Tag>
        </Popover>
        <Popover
          title="SLP Diagnosis"
          content={<pre>{JSON.stringify(slp, null, 2)}</pre>}
        >
          <Tag color={slp.length > 0 && "#5C6770"}>SLP: {slp.length}</Tag>
        </Popover>
        <br />
        <Popover
          title="Other Diagnosis"
          content={<pre>{JSON.stringify(other, null, 2)}</pre>}
        >
          <Tag color={other.length > 0 && "#5C6770"}>Other: {other.length}</Tag>
        </Popover>
      </Col>
    </Row>
  )
}
