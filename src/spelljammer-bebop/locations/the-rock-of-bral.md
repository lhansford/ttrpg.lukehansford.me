---
aliases:
  - Bral
  - The Rock
  - The Rock of Bral
in:
  - '[Realmspace](locations/realmspace.md)'
layout: layout.webc
title: The Rock of Bral
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# The Rock of Bral

Rotating asteroid. Floats around in Realmspace.

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [the-rock-of-bral](locations/the-rock-of-bral.md))
```
