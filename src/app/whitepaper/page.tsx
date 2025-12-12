import Link from "next/link";
import { PiArrowLeft } from "react-icons/pi";
import Markdown from "react-markdown";
import rehypeSlug from "rehype-slug";

export default function whitepaperPage() {
  return (
    <div className="prose m-auto max-w-5xl px-4 py-20">
      <Link className="btn btn-ghost mb-8" href="/">
        <PiArrowLeft /> Go back to home
      </Link>
      <Markdown rehypePlugins={[rehypeSlug]}>
        {`
### "Build a nation. No land required."
# AIM States - Whitepaper

## Table of Contents

1. [Intro: The World Updated, Nations Didn't](#1-intro-the-world-updated-nations-didnt)
2. [So What Is AIM States?](#2-so-what-is-aim-states)
3. [Network States: Our Definition](#3-network-states-our-definition)
4. [How an AIM State Works](#4-how-an-aim-state-works)
5. [Why This Actually Matters](#5-why-this-actually-matters)
6. [Safety + Transparency (Non-negotiable)](#6-safety--transparency-non-negotiable)
7. [The Tech Stack (Explained Short + Clear)](#7-the-tech-stack-explained-short--clear)
8. [Who Is This For?](#8-who-is-this-for)
9. [Roadmap](#9-roadmap)
10. [Our Philosophy](#10-our-philosophy)
11. [Closing](#11-closing)

---

## 1. Intro: The World Updated, Nations Didn't

The world has changed a lot recently.

People now live in group chats more than cities.
Communities form on social media faster than in real neighborhoods.
Entire cultures are getting displaced by war, climate change, and bad politics.
Diasporas are larger than the populations back home.

But the rulebook for being a “state”? Still stuck in 1850.

**Borders. Land. Flags. Bureaucrats.**

Feels kinda outdated, right?

So we asked some spicy questions:

- **What if a nation didn’t need land?**
- **What if it was built from shared values instead?**
- **And what if AI could help the community actually *stick* to those values?**

Those questions became AIM States.

---

## 2. So What *Is* AIM States?

AIM States is a platform where anyone can launch a N**etwork State** - a digital-first nation. With:

- A constitution written by humans
- Governance run by a transparent on-chain AI
- Citizens from anywhere in the world
- Membership rules you define
- Zero dependency on physical territory

It’s as easy as:

- WordPress → for publishing
- Shopify → for commerce
- **AIM States → for network states**

A new layer of society, built on the internet, powered by real values.

---

## 3. Network States: Our Definition

Network States are communities organized online around a shared mission.

Balaji made the concept mainstream - we love him for that.

He talks about:

- Organizing online
- Building capital
- Acquiring land
- Getting recognition/sovereignty

AIM States doesn’t replace that vision.

We just have a slightly different perspective:

**You don’t need land to be a real nation.
Values + governance + citizens = a network state.**

Both paths are valid.

We build the infrastructure for *all* of them.

---

## 4. How an AIM State Works

### A. You write a constitution

Plain language. Real values. Comprehensive.

### B. An on-chain AI becomes your “governor”

This AI:

- Reads every proposal
- Applies constitutional rules consistently
- Publishes reasoning
- Stores decisions on-chain for transparency
- Can’t be dishonest to the constitution
- Can’t run vibes-based politics

### C. Citizens (Humans) stay in full control

They can:

- Amend the constitution
- Override AI decisions
- Replace the AI model
- Maybe elect a human co-manager (for a hybrid aproach)
- Define or change how citizenship works

### D. Membership rules are totally customizable

Pick any filter or bring your own:

- Proof of humanhood
- Country-restricted
- Invite-only
- Open to everyone

That’s it.

Simple stack, huge potential. Totally upgradeable.

---

## 5. Why This Actually Matters

### A. Nations that might lose land still get to exist

Kiribati, Tuvalu, indigenous nations, Palestine - digital continuity matters. They can even rebuild their physical land with the power from the network state.

### B. Communities scattered across the world finally get a home

Your identity shouldn’t depend on your zip code.

### C. Mission-based nations become real

Imagine:

- A sustainability-first nation
- A science-progress nation
- Spiritual or religious communities with modern governance
- A nation for builders (👀)

### D. Cities and countries get digital twins

The “Seoul Network State” or “Digital Kenya” is not sci-fi anymore.

Countries/Cities can decide to have a network version of themselves.

### E. Governance experiments without breaking a real country

Try new justice models, budgeting rules, or voting systems safely.

---

## 6. Safety + Transparency (Non-negotiable)

We built this to help humans, not replace them.

### The AI cannot:

- change the constitution
- make hidden decisions
- act outside its authority
- favor anyone
- run on vibes

### The system guarantees:

- Every decision includes proof
- Humans can override
- Emergency stop is real
- Ability to upgrade to fix vulnerabilities

---

## 7. The Tech Stack (Explained Short + Clear)

### A. Verifiable AI

- Deterministic and verifiable AI to eliminate need for trust
- Every decisions made according to the constitution
- Model-upgradeable by citizens

### B. DAO - Blockchain Layer

- Immutable transactions
- Transparent governance
- Verifiable execution
- Modular systems for identity, permissions, etc

### C. Treasury

- Community budgets
- Automated allocations without corruption
- Constitution-driven spending rules

### D. More possibilities to explore

- Better judicial systems, marriage registries.. etc
- State run organizations and jobs
- Anything a nation state can do

Boom. A state, but digital.

---

## 8. Who Is This For?

### New value-based nations

Because “country = geography” is outdated AF.

### Cultures under attack

Preserve identity + governance digitally.

### Builders + governance nerds

Test new political models without hurting anyone.

### Cities + governments

Create digital governance extensions.

---

## 9. Roadmap

### Phase 1 — Proof of concept

- Build a working platform with governance AI
- Test out citizenship systems
- Launch for public use

### Phase 2 — Adoption

- Run Pop-up cities and explore more ideas
- Bring in all different states
- Make it easy for anyone to explore and join states

### Phase 3 — Transformation

- Let countries or cities transform to network states
- Prepare features for a total state governance
- Train citizen participation

---

## 10. Our Philosophy

Our vibe is simple:

**Governance should be principled, transparent, and accessible. Even if you’re a tiny community with no land.**

AIM States is our attempt to give people something the real world often refuses:

**A home you can’t lose. A nation built on values.
A system that actually does what it says.**

---

## 11. Closing

If you’ve ever wished your community had a real place in the world

or wished your *country* followed its values consistently

or wanted to try building society 2.0…

Welcome.

This is for you.

**Let’s build network states that matter.
Let’s build nations that actually follow their values.
Let’s build futures that don’t depend on borders.**

Let's go.

---

aimstates.com
        `}
      </Markdown>
    </div>
  );
}
