# Decisions & Reasoning

## APIs Used
- exchangerate.host
- frankfurter.app

Used multiple public APIs to reduce downtime risk.

## Fallback Strategy
- Try APIs sequentially
- If all fail, serve last cached data
- Never crash or show blank UI

## Conflicting Data
- Pick first successful response
- Avoid averaging to prevent confusing users

## User Experience
- Always show data freshness
- Clearly indicate cached or stale data

## Data Freshness
- 2-minute in-memory cache
- Improves reliability and reduces rate-limit issues

## What I Cut
- Auth
- Historical charts
- Currency selector
- Premium API routing

## What I’d Add
- Redis cache
- Background refresh job
- Premium calls for high-intent users
- Conversion nudges
