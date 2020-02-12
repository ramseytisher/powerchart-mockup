import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import AlertIcon from "../components/icons/alert-icon"
import DietIcon from "../components/icons/diet-icon"
import MedIcon from "../components/icons/med-icon"
import AllergyIcon from "../components/icons/allergy-icon"

import { Table, Tabs, Input, Result, Icon, Progress, Card } from "antd"
const { TabPane } = Tabs
const { Search } = Input

const data = [
  {
    name: "Ramsey Tisher",
    room: "123",
    entryDate: "1/1/2020",
    primDx: "R10.10",
    allergies: ["peanut", "Amoxicillin"],
    meds: ["ibuprofen"],
    diet: ["fluid-restrict", "npo"],
    alerts: ["no-bm-72", "fall-72", "behavior", "cog", "skin", "fluid-decline"],
  },
  {
    name: "Jennifer Nolan",
    room: "123",
    entryDate: "1/1/2020",
    primDx: "R10.10",
    allergies: ["Peanut", "Amoxicillin"],
    meds: ["tylenol"],
    diet: ["fluid-restrict", "npo"],
    alerts: ["no-bm-72", "fall-72", "behavior"],
  },
  {
    name: "Beth Neil",
    room: "123",
    entryDate: "1/1/2020",
    primDx: "R10.10",
    allergies: ["Peanut", "Amoxicillin"],
    meds: ["Ibuprofin"],
    diet: ["fluid-restrict", "npo"],
    alerts: ["no-bm-72", "cog", "skin", "fluid-decline"],
  },
]

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Room",
    dataIndex: "room",
  },
  {
    title: "LOS",
    dataIndex: "entryDate",
  },
  {
    title: "Primary Diagnosis",
    dataIndex: "primDx",
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
    title: "Diet",
    dataIndex: "diet",
    render: diet => (
      <span>
        {diet.map(dietItem => {
          return <DietIcon diet={dietItem} />
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

  return (
    <Layout>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Alerts" key="1">
          <Card title="Last 72 Hours">
            <Card.Grid style={{ width: '20%' }}><h3>No BM</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
            <Card.Grid style={{ width: '20%' }}><h3>Fall Event</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
            <Card.Grid style={{ width: '20%' }}><h3>Fluid Decline</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
            <Card.Grid style={{ width: '20%' }}><h3>Weight Change</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
          </Card>
          <Card title="Another Block">
            <Card.Grid style={{ width: '20%' }}><h3>No BM</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
            <Card.Grid style={{ width: '20%' }}><h3>Fall Event</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
            <Card.Grid style={{ width: '20%' }}><h3>Fluid Decline</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
            <Card.Grid style={{ width: '20%' }}><h3>Weight Change</h3><Progress type="dashboard" percent={32} format={(i) => i} width={75} /></Card.Grid>
          </Card>
        </TabPane>
        <TabPane tab="Patient List" key="2">
          <Search />

          <Table size="small" columns={columns} dataSource={data} />
        </TabPane>
      </Tabs>
    </Layout>
  )
}
