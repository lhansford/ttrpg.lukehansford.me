---
aliases:
  - Nine Hells
in: null
layout: layout.webc
title: The Nine Hells
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# The Nine Hells

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [the-nine-hells](locations/the-nine-hells.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [the-nine-hells](locations/the-nine-hells.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [the-nine-hells](locations/the-nine-hells.md))
```
