import React from "react";
import Section from "../components/UI/section/Section";
import Otfn from "../components/projects/otfn/Otfn";
import Portfolio from "../components/projects/portfolio/Portfolio";
import ScubaDiver from "../components/projects/scuba-diver/ScubaDiver";
import ShippingBids from "../components/projects/shipping-bids/ShippingBids";
import TvTracker from "../components/projects/tv-tracker/TvTracker";

function Projects() {
  return (
    <div>
      <Section title="My Portfolio" className="mt-3" />
      <Portfolio />

      <Section title="Shipping Bids" className="mt-3" />
      <ShippingBids />

      <Section title="Tv-Tracker" className="mt-3" />
      <TvTracker />

      <Section title="ScubaDiver" className="mt-3" />
      <ScubaDiver />

      <Section title="Online tool for noobs" className="mt-3" />
      <Otfn />
    </div>
  );
}

export default Projects;
