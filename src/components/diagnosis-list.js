import React from "react"

import { Row, Col, Tag } from "antd"

export default ({ list }) => (
  <>
    {list.map(item => (
      <Row type="flex" gutter={4}>
        <Col>{item.code}</Col>
        <Col>{item.tags.map(tag => (<Tag>{tag}</Tag>))}</Col>
      </Row>
    ))}
  </>
)
