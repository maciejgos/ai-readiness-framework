---
title: Governed automation checklist
date: 2025-01-28
summary: Practical safeguards to bake into every automation so teams can trust and scale it.
---

## Define the controls up front

Document the data sources, retention rules, and privacy considerations before you ship the first workflow. Capture who approves changes and where evidence will live.

- Data classification and retention
- Encryption and key management
- Roles, access, and approvals

## Instrument everything

Observability keeps stakeholders confident and makes troubleshooting faster.

1. Centralize logs for prompts, errors, and API calls.
2. Track success and failure paths with unique trace IDs.
3. Alert owners on rate-limit, auth, or schema errors.

## Provide a clear operating model

Ship a short runbook alongside the automation. Include the owner, SLOs, and how to pause or roll back changes. Make it easy for new team members to understand what the automation does and how to iterate safely.
