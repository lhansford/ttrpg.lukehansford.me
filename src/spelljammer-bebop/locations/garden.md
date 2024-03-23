---
aliases: null
in:
  - '[[realmspace|Realmspace]]'
layout: layout.webc
title: Garden
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Garden

- A jungleish planet. The moons are weird and don't orbit.

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
