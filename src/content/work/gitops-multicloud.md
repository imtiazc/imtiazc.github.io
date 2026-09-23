---
title: GitOps delivery that took Workday multi-cloud
org: Workday
period: 2013 – 2024
summary: Architecting the Argo CD / GitOps delivery model that moved Workday onto Kubernetes across AWS and GCP, and patching Argo CD itself where it broke at scale.
order: 4
metrics:
  - value: 50%
    label: faster deployments
  - value: 2
    label: public clouds (AWS, GCP)
stack: [Argo CD, Kubernetes, Go, AWS, GCP]
---

I architected the **Argo CD / GitOps delivery model** that took Workday multi-cloud on Kubernetes across AWS and GCP. It **cut deployment time by 50%** and improved both observability and the developer experience.

## Extending the platform

- **Custom Kubernetes controllers in Go** to extend the platform where off-the-shelf pieces stopped.
- **A forked Argo CD build** that pre-fetches and caches Git content. This decouples application sync from live Git availability and stops repo-server overload during maintenance windows. Upstream discussion: [argo-cd#17497](https://github.com/argoproj/argo-cd/issues/17497).

## People

I also grew the team's senior technical capacity, coaching **two engineers to Principal Engineer**.
