import React from "react"
import styled from "styled-components"

import { Button } from "antd"

const FilterButton = styled(Button)`
  margin-right: 4px;
  margin-left: 4px;
  margin-top: 4px;
`

const Box = styled.div`
  padding: 8px;
`

export default ({ filters, handleFilter }) => {
  return (
    <Box>
      <br />
      <FilterButton
        icon="alert"
        type={filters.indexOf("high-risk-med") !== -1 && "primary"}
        onClick={() => handleFilter("high-risk-med")}
      >
        High Risk Med
      </FilterButton>
      <FilterButton
        icon="apple"
        type={filters.indexOf("allergy") !== -1 && "primary"}
        onClick={() => handleFilter("allergy")}
      >
        Allergies
      </FilterButton>
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
        icon="monitor"
        type={filters.indexOf("monitor") !== -1 && "primary"}
        onClick={() => handleFilter("monitor")}
      >
        Skin Issue
      </FilterButton>
      <FilterButton
        icon="lock"
        type={filters.indexOf("lock") !== -1 && "primary"}
        onClick={() => handleFilter("lock")}
      >
        Restrictions
      </FilterButton>
    </Box>
  )
}
