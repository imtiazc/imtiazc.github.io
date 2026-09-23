---
title: One stack for a 40-region load balancer
org: Oracle Cloud Infrastructure
period: 2025 – present
summary: Setting the multi-year direction to converge two divergent control-plane and data-plane implementations into one modular stack, and making breaking changes safe to ship across every region.
order: 1
metrics:
  - value: 40+
    label: regions served
  - value: 90 → 35 min
    label: build time
  - value: 6.9 → 2.0 GB
    label: container image
  - value: ~40%
    label: faster deployments
stack: [Control plane, Data plane, Service contracts, Grafana, CI/CD]
---

I joined OCI as principal architect for the load balancing control plane, a traffic-critical service running in more than 40 regions.

## The problem

Two implementations of the control plane and data plane had grown apart. Every feature had to be built twice, operated twice, and deployed across multiple fleets. Worse, a change in the control plane could ripple into the data plane and cause an outage.

## The architecture

I set a multi-year North Star: converge both implementations into **one modular stack**, with:

- **versioned service contracts** and inter-service schemas, so components evolve independently
- **explicit dependency boundaries**, so a control-plane change can't reach into the data plane
- **one fleet to deploy**, removing multi-fleet redeployments across 40+ regions

Getting there was as much alignment as design. The case to management rested on three costs: feature-parity drift, duplicated development and operations, and the outage risk of changes crossing layers. The work is now in multi-year execution.

## Release velocity for breaking changes

I owned one question: *how fast can a breaking change safely reach 40+ regions?* Before optimizing anything, I profiled the delivery path end to end to find the bottlenecks that actually dominated. Fixing those cut build time from **90+ minutes to 35**, image size from **~6.9 GB to ~2.0 GB**, and deployment time by **~40%**. Grafana dashboards keep delivery performance visible so it doesn't quietly regress.
