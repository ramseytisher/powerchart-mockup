import { Link } from "gatsby"
import React from "react"

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

export default ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)