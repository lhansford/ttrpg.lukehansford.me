---
aliases:
  - Free City of Greyhawk
  - Greyhawk
in:
  - '[Oerth](locations/oerth.md)'
layout: layout.webc
title: Free City of Greyhawk
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Free City of Greyhawk

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [greyhawk](locations/greyhawk.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [greyhawk](locations/greyhawk.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [greyhawk](locations/greyhawk.md))
```
