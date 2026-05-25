# BountyAgent

BountyAgent is a paid autonomous microtask agent for the OpenClaw / GOAT hackathon.

## Core idea

Most AI assistants only chat. BountyAgent behaves like a paid digital worker:

1. User submits a task.
2. BountyAgent quotes a small price.
3. Payment is confirmed.
4. BountyAgent completes the task.
5. VerifyAgent checks the deliverable.
6. BountyAgent returns a receipt tied to its agent identity.

## Current MVP

This local MVP uses mocks for:

- ERC-8004 agent identity
- x402 payment confirmation
- GOAT transaction hash

At the hackathon, these mocks should be replaced with:

- real ERC-8004 agent registration
- real x402 payment flow
- OpenClaw / Telegram interface
- GOAT dashboard-visible activity

## Demo task

Generate a verified lead pack.

Example request:

> Find me 3 relevant healthcare admin opportunities in Toronto.

## Run locally

```bash
npm install
npm run dev
```

## Why payment is justified

The user is not paying for a generic AI summary. The user is paying for a completed microtask:

- structured deliverable
- verification
- task receipt
- agent identity
- payment reference

## Hackathon integration targets

- OpenClaw / Telegram chat interface
- ERC-8004 agent identity registration
- x402 payment gate
- GOAT Network transaction/payment reference
