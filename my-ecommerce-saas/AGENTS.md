<!-- BEGIN:nextjs-agent-rules -->
# Agent Instruction Guide: SaaS Migration

## ⚠️ CRITICAL: Environment Context
This is **NOT** standard Next.js. This version has breaking changes in APIs, conventions, and file structure. 
- **MANDATORY**: Read documentation in `node_modules/next/dist/docs/` before implementing features.
- **HEED**: All deprecation notices in logs or documentation.

## 🎯 Project Objective
**Migration from Static HTML/JSON to Next.js Fullstack (SaaS).**
- **Transition**: Move data storage from local JSON files to PostgreSQL.
- **Rendering**: Shift from client-side static rendering to SSR/SSG using the App Router.
- **Feature Additions**: Implement Authentication, Authorization, and persistent cart management.

## 🛠 Tech Stack
- **Frontend**: Next.js (App Router), React, CSS Modules (Tailwind only if explicitly requested).
- **Backend**: Next.js API Routes & Server Actions.
- **Database**: PostgreSQL (Relational Schema).
- **SEO**: Metadata API (NF1 requirement).

## 🏗 Architectural Rules
1. **Feature-based Architecture**: Organize folders by feature (NF3), not just by technical role.
2. **Server-First**: Default to Server Components; use `'use client'` only when interaction is required.
3. **Data Schema**: Follow the schema defined in `proyect-spec.yaml` (users, categories, products, cart_items).
4. **Performance**: Prioritize Core Web Vitals (NF2) and efficient image rendering (NF4).

## 🚀 Active Phase: Documentation & Specification
Current focus is on establishing the foundation and data migration logic.
<!-- END:nextjs-agent-rules -->
