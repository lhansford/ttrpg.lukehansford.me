---
aliases:
  - Faerun
  - Faerûn
in:
  - '[[locations/toril|Toril]]'
layout: layout.webc
title: Faerûn
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Faerûn

A continent on Toril.

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```
