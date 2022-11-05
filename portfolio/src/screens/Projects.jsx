import React from 'react'
import Section from '../components/UI/section/Section'
import Otfn from '../components/projects/otfn/Otfn'
import Portfolio from '../components/projects/portfolio/Portfolio'
import ScubaDiver from '../components/projects/scuba-diver/ScubaDiver'
import ShippingBids from '../components/projects/shipping-bids/ShippingBids'
import TvTracker from '../components/projects/tv-tracker/TvTracker'

function Projects() {
  return (
    <div>
      <Section title="Online tool for noobs" />
        <Otfn />

      <Section title="ScubaDiver" />
        <ScubaDiver />

      <Section title="Tv-Tracker" />
        <TvTracker />
      
      <Section title="Shipping Bids" />
        <ShippingBids />
      
      <Section title="My Portfolio" />
        <Portfolio />
    </div>
  )
}

export default Projects