import React from "react"

import { Row, Col, Tag } from "antd"

export default ({ list }) => (
  <>
    {list.map(item => (
      <Row type="flex" gutter={4}>
        <Col>{item.code}</Col>
        <Col>{item.tags.map(tag => (<Tag color={tag === 'Primary' && '#00A8E1'}>{tag}</Tag>))}</Col>
      </Row>
    ))}
  </>
)
