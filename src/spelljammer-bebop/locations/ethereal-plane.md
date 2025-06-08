---
aliases:
  - The Ethereal Plane
in: null
layout: layout.webc
title: Ethereal Plane
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Ethereal Plane

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [ethereal-plane](locations/ethereal-plane.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [ethereal-plane](locations/ethereal-plane.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [ethereal-plane](locations/ethereal-plane.md))
```
