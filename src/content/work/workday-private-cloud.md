---
title: Building the 6th-largest private cloud
org: Workday
period: 2013 – 2024
summary: Joining post-IPO to build Workday's cloud infrastructure from zero, then scaling OpenStack to ~120,000 VMs across five regions in the US and EU.
order: 3
metrics:
  - value: ~120K
    label: running VMs
  - value: 90%
    label: of workloads migrated
  - value: 100K+
    label: instances in < 5 min
  - value: 4×
    label: smaller hardware footprint
stack: [OpenStack, HAProxy, SQL, VM placement]
---

I joined Workday after its IPO to form a new team and build its cloud infrastructure from the ground up. It became the **6th-largest private cloud in the world**.

## Scale

I led the OpenStack private cloud architecture, which grew to **~120,000 running VMs across 5 regions** in the US and EU. We migrated **40–50 services, about 90% of workloads**, off bare-metal deployment.

## Making the control plane fast

The target was to create or destroy **100,000+ instances in under five minutes**. Before optimizing, I diagnosed why it was slow, and there were several separate causes:

- machine-image transfers saturating the network
- thundering-herd image fetches
- HAProxy throughput limits
- oversized SQL responses eating load-balancer bandwidth

Each got its own fix: warm image caching and pre-fetch, proxy tuning, and query and response optimization. I presented the work at OpenStack Summit ([talk](https://www.youtube.com/watch?v=hx_MdGI7fcc)).

## Cost

Placement strategies tuned for memory-intensive services cut the hardware footprint **4×**, which lowered infrastructure cost and let releases move faster.
