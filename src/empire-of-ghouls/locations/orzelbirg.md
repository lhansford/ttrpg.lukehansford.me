---
aliases:
  - Orzelbirg
in: '[[locations/morgau|Morgau]]'
layout: layout.webc
title: Orzelbirg
campaignSlug: empire-of-ghouls
campaignTitle: Empire of Ghouls
tags:
  - locations
---
# Orzelbirg

## Locations
- Broken Handle Inn. Perhaps allies can be found there according to [piotr](npcs/piotr.md)
- [The Dread Fortress](locations/the-dread-fortress.md)

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [[]])
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [[]])
```
