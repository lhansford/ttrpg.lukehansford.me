---
aliases:
  - Coliar
in:
  - '[realmspace](locations/realmspace.md)'
layout: layout.webc
title: Coliar
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Coliar

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [coliar](locations/coliar.md))
```
