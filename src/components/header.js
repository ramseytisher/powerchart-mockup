import { Link } from "gatsby"
import React from "react"

// import Login from "./login"

import {
  Affix,
  Row,
  Col,
  Button,
  Popconfirm,
  Typography,
  message,
  Icon,
} from "antd"
const { Title, Text } = Typography

const Header = () => (
  <Affix>
    <header
      style={{
        background: `#fff`,
        margin: `0 auto`,
        paddingLeft: `1.0875rem`,
        paddingRight: `1.0875rem`
      }}
    >
      <Row type="flex" align="middle" justify="space-between">
        <Col>
          <Title>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                color: "#5C6770",
              }}
            >
              <Icon type="highlight" theme="twoTone" /> PowerChart LTC Mockup
            </Link>
          </Title>
        </Col>
        <Col>
          <Link to="/dashboard">
            <Button type="link" size="large">
              Dashboard
            </Button>
          </Link>
        </Col>
      </Row>
    </header>
  </Affix>
)

export default Header
