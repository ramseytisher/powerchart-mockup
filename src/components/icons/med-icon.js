import React, { useState } from "react"

import { Icon, Popover } from "antd"

const HighRisk = () => (
  <>
    <p>
      High risk medications are drugs that have a heightened risk of causing
      significant patient harm when they are used in error.
    </p>
  </>
)
const Psychotropic = () => (
  <>
    <p>
      A psychiatric medication is a licensed psychoactive drug taken to exert an
      effect on the chemical makeup of the brain and nervous system. Thus, these
      medications are used to treat mental illnesses. Usually prescribed in
      psychiatric settings, these medications are typically made of synthetic
      chemical compounds.
    </p>
  </>
)
const Opioid = () => (
  <>
    <p>
      Opioids are substances that act on opioid receptors to produce
      morphine-like effects. Medically they are primarily used for pain relief,
      including anesthesia.
    </p>
  </>
)
const Anticoagulant = () => (
  <>
    <p>
      Anticoagulants, commonly known as blood thinners, are chemical substances
      that prevent or reduce coagulation of blood, prolonging the clotting time.
    </p>
  </>
)
const Diuretic = () => (
  <>
    <p>
      A diuretic is any substance that promotes diuresis, the increased
      production of urine. This includes forced diuresis. There are several
      categories of diuretics. All diuretics increase the excretion of water
      from bodies, although each class does so in a distinct way.
    </p>
  </>
)
const Antibiotic = () => (
  <>
    <p>
      An antibiotic is a type of antimicrobial substance active against bacteria
      and is the most important type of antibacterial agent for fighting
      bacterial infections. Antibiotic medications are widely used in the
      treatment and prevention of such infections. They may either kill or
      inhibit the growth of bacteria.
    </p>
  </>
)

export default ({ med }) => {
  const [info, setInfo] = useState(null)

  switch (med) {
    case "psychotropic":
      return (
        <Popover title="Psychotropic Medication" content={<Psychotropic />}>
          <Icon type="alert" />
        </Popover>
      )
    case "opioid":
      return (
        <Popover title="Opioid" content={<Opioid />}>
          <Icon type="dislike" />
        </Popover>
      )
    case "anticoagulant":
      return (
        <Popover title="Anticoagulants" content={<Anticoagulant />}>
          <Icon type="heart" />
        </Popover>
      )
    case "diuretic":
      return (
        <Popover title="Diuretic" content={<Diuretic />}>
          <Icon type="experiment" />
        </Popover>
      )
    case "antibiotic":
      return (
        <Popover title="Antibiotic" content={<Antibiotic />}>
          <Icon type="bug" />
        </Popover>
      )
    default:
      return null
  }
}
