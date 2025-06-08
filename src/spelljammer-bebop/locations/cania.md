---
aliases: null
in:
  - '[The Nine Hells](locations/the-nine-hells.md)'
layout: layout.webc
title: Cania
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Cania

- Plane of the Nine Hells.
- Unbearably cold.
- Realm of Mephistopheles ([Raphael](npcs/raphael.md)'s dad).

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [cania](locations/cania.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [cania](locations/cania.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [cania](locations/cania.md))
```
