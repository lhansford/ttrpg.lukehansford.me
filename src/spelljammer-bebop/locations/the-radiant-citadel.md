---
aliases: null
in:
  - '[Ethereal Plane](locations/ethereal-plane.md)'
layout: layout.webc
title: The Radiant Citadel
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# The Radiant Citadel

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [the-radiant-citadel](locations/the-radiant-citadel.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [the-radiant-citadel](locations/the-radiant-citadel.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [the-radiant-citadel](locations/the-radiant-citadel.md))
```
