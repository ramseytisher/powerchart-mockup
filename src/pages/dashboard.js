import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import AlertIcon from "../components/icons/alert-icon"
import DietIcon from "../components/icons/diet-icon"
import MedIcon from "../components/icons/med-icon"
import AllergyIcon from "../components/icons/allergy-icon"
import SpecificIcon from "../components/icons/specific-icon"
import Filters from "../components/filters"
import DiagnosisList from "../components/diagnosis-list"

import { initialData } from "../data/patient-data"

import {
  Table,
  Tabs,
  Input,
  Button,
  Result,
  Icon,
  Progress,
  Drawer,
  Card,
  Row,
  Col,
  Avatar,
} from "antd"
const { TabPane } = Tabs
const { Search } = Input

const PatientTitle = styled.p`
  color: black;
  font-size: 1rem;
  margin: 0;
`

const PatientInfo = styled.p`
  font-size: 0.75rem;
  margin: 0;
  color: gray;
  font-style: italic;
`

const columns = [
  {
    title: "Patient Information",
    dataIndex: "name",
    render: (name, record) => (
      <Row type="flex" gutter={4} align="middle">
        <Col>
          <Avatar shape="square" icon="user" />
        </Col>
        <Col style={{ paddingLeft: "10px" }}>
          <PatientTitle>{name}</PatientTitle>
          <PatientInfo>
            Room: {record.room} | LOS: {record.entryDate} | Gender:{" "}
            {record.gender}
          </PatientInfo>
        </Col>
      </Row>
    ),
  },
  {
    title: "Specifics",
    dataIndex: "specifics",
    render: specifics => (
      <span>
        {specifics.map(specific => {
          console.log("sp: ", specific)
          return <SpecificIcon specific={specific} />
        })}
      </span>
    ),
  },
  {
    title: "Diagnosis",
    dataIndex: "dx",
    render: dx => <DiagnosisList list={dx} />,
  },
  {
    title: "Allergies",
    dataIndex: "allergies",
    render: allergies => (
      <span>
        {allergies.map(allergy => {
          return <AllergyIcon allergy={allergy} />
        })}
      </span>
    ),
  },
  {
    title: "Medications",
    dataIndex: "meds",
    render: meds => (
      <span>
        {meds.map(med => {
          return <MedIcon med={med} />
        })}
      </span>
    ),
  },
  {
    title: "I/O",
    dataIndex: "diets",
    render: diets => (
      <span>
        {diets.map(diet => {
          return <DietIcon diet={diet} />
        })}
      </span>
    ),
  },
  {
    title: "Alerts",
    dataIndex: "alerts",
    render: alerts => (
      <span>
        {alerts.map(alert => {
          return <AlertIcon alert={alert} />
        })}
      </span>
    ),
  },
]

export default () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState(initialData)
  const [filters, setFilters] = useState([])
  const [detail, setDetail] = useState(null)

  const handleFilter = value => {
    if (filters.indexOf(value) === -1) {
      setFilters([...filters, value])
    } else {
      setFilters(filters.filter(item => item !== value))
    }
  }

  const handleReset = () => {
    setSearch("")
    setFilters([])
  }

  useEffect(() => {
    if (filters.length > 0) {
      const subset = initialData.filter(item => {
        return (
          item.meds.some(med => filters.indexOf(med) !== -1) ||
          item.allergies.some(allergy => filters.indexOf(allergy) !== -1) ||
          item.diets.some(diet => filters.indexOf(diet) !== -1) ||
          item.alerts.some(alert => filters.indexOf(alert) !== -1)
        )
      })
      if (search) {
        const searchedSubset = subset.filter(set => {
          return (
            set.name.toUpperCase().indexOf(search.toUpperCase()) !== -1 ||
            set.room.toUpperCase().indexOf(search.toUpperCase()) !== -1
          )
        })
        setData(searchedSubset)
      } else {
        setData(subset)
      }
    } else {
      if (search) {
        const searched = initialData.filter(item => {
          return (
            item.name.toUpperCase().indexOf(search.toUpperCase()) !== -1 ||
            item.room.toUpperCase().indexOf(search.toUpperCase()) !== -1
          )
        })
        setData(searched)
      } else {
        setData(initialData)
      }
    }
  }, [search, filters])

  return (
    <Layout>
      <Tabs defaultActiveKey="2">
        <TabPane tab="Alerts" key="1">
          <Card title="Last 72 Hours">
            <Card.Grid style={{ width: "20%" }}>
              <h3>No BM</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <h3>Fall Event</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <h3>Fluid Decline</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <h3>Weight Change</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
          </Card>
          <Card title="Another Block">
            <Card.Grid style={{ width: "20%" }}>
              <h3>No BM</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <h3>Fall Event</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <h3>Fluid Decline</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
            <Card.Grid style={{ width: "20%" }}>
              <h3>Weight Change</h3>
              <Progress
                type="dashboard"
                percent={32}
                format={i => i}
                width={75}
              />
            </Card.Grid>
          </Card>
        </TabPane>
        <TabPane tab="Patient List" key="2">
          <Row
            type="flex"
            align="middle"
            justify="space-between"
            style={{ padding: 8 }}
          >
            <Col span={8}>
              <Search
                size="large"
                placeholder="Search for ..."
                onChange={e => setSearch(e.target.value)}
                value={search}
              />
            </Col>
            <Col span={16}>
              <Filters
                filters={filters}
                handleReset={handleReset}
                handleFilter={handleFilter}
              />
            </Col>
          </Row>
          <Table
            size="small"
            columns={columns}
            dataSource={data}
            onRow={(record, rowIndex) => {
              return {
                onClick: event => {
                  setDetail(record)
                },
              }
            }}
          />
        </TabPane>
      </Tabs>
      <Drawer
        title="Details"
        visible={detail}
        closable
        width="50vw"
        onClose={() => setDetail(null)}
      >
        <pre>{JSON.stringify(detail, null, 2)}</pre>
      </Drawer>
    </Layout>
  )
}
