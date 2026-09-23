---
title: LLM agents in the live operational path
org: Oracle Cloud Infrastructure
period: 2025 – present
summary: Architecting an ML- and LLM-driven agent platform that triages incidents across a networking fleet and runs human-gated remediation, and is now the org's reference AI-operations architecture.
order: 2
metrics:
  - value: 3
    label: teams adopted it
  - value: 100%
    label: AI tooling adoption
  - value: +70%
    label: AI-assisted development
stack: [LangGraph, Python, Java / Dropwizard, LangFuse, MLOps]
---

Operating a global networking fleet produces far more incidents than a team can handle by adding people. I built an agent prototype aimed at that toil. After a demo to senior leadership, a new organization, the **Network Automation Agent Platform**, was formed around the approach, and I was asked to lead its architecture.

## How it works

- **Triage.** Agents built with LangGraph pick up operational incidents across the fleet. ML ranks root-cause candidates and recommends remediation actions.
- **Human-gated remediation.** Long-running remediation runs *in the live operational path*, with a human approving each consequential step.
- **Closed feedback loop.** Each mitigation is checked against service health metrics, and the outcome feeds back into agent learning, so accuracy improves with every incident.
- **Evaluation discipline.** LangFuse and MLOps practice measure agent quality, latency, and cost. That measurement is what makes it acceptable to put generative AI in an operational path at all.

Three engineering teams have adopted it as the org's reference architecture for AI operations.

## Standards for coding agents

Separately, I defined the org's practices for AI-assisted development: spec-driven development, standardized PR review, and automated enforcement of security and architecture guidelines in the coding pipeline. AI tooling reached **100% adoption** across control-plane and data-plane teams, and AI-assisted and agentic development grew **70%**.
