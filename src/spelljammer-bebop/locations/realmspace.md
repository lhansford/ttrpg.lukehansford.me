---
aliases:
  - Realmspace
in: null
layout: layout.webc
title: Realmspace
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Realmspace

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [realmspace](locations/realmspace.md))
```
