---
aliases:
  - Stardock
in:
  - '[The Tears of Selune](locations/the-tears-of-selune.md)'
layout: layout.webc
title: Stardock
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Stardock

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [stardock](locations/stardock.md))
```
