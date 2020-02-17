import React from "react"
import styled from "styled-components"

import { Button, Tabs } from "antd"
const { TabPane } = Tabs

const FilterButton = styled(Button)`
  margin-right: 4px;
  margin-left: 4px;
  margin-top: 4px;
`

export default ({ filters, handleFilter, handleReset }) => {
  return (
    <Tabs
      style={{ padding: "8px" }}
      tabBarExtraContent={
        <Button disabled={filters.length === 0} onClick={() => handleReset()}>
          Reset [{filters.length}]
        </Button>
      }
    >
      <TabPane tab="Medications" key="1">
        <FilterButton
          icon="alert"
          type={filters.indexOf("high-risk-med") !== -1 && "primary"}
          onClick={() => handleFilter("high-risk-med")}
        >
          High Risk Med
        </FilterButton>
      </TabPane>
      <TabPane tab="Alerts" key="2">
        <FilterButton
          icon="down"
          type={filters.indexOf("fall-risk") !== -1 && "primary"}
          onClick={() => handleFilter("fall-risk")}
        >
          Fall Risk
        </FilterButton>
        <FilterButton
          icon="frown"
          type={filters.indexOf("behavior") !== -1 && "primary"}
          onClick={() => handleFilter("behavior")}
        >
          Behavior Issues
        </FilterButton>
        <FilterButton
          icon="reddit"
          type={filters.indexOf("cog") !== -1 && "primary"}
          onClick={() => handleFilter("cog")}
        >
          Cognitive Impairment
        </FilterButton>
        <FilterButton
          icon="monitor"
          type={filters.indexOf("monitor") !== -1 && "primary"}
          onClick={() => handleFilter("monitor")}
        >
          Skin Issue
        </FilterButton>
      </TabPane>
      <TabPane tab="Other" key="3">
        <FilterButton
          icon="apple"
          type={filters.indexOf("allergy") !== -1 && "primary"}
          onClick={() => handleFilter("allergy")}
        >
          Allergies
        </FilterButton>

        <FilterButton
          icon="folder-open"
          type={filters.indexOf("review-careplan") !== -1 && "primary"}
          onClick={() => handleFilter("review-careplan")}
        >
          Care Plan Review
        </FilterButton>
        <FilterButton
          icon="zoom-in"
          type={filters.indexOf("zoom-in") !== -1 && "primary"}
          onClick={() => handleFilter("zoom-in")}
        >
          New Admit
        </FilterButton>
        <FilterButton
          icon="lock"
          type={filters.indexOf("lock") !== -1 && "primary"}
          onClick={() => handleFilter("lock")}
        >
          Restrictions
        </FilterButton>
      </TabPane>
    </Tabs>
  )
}
