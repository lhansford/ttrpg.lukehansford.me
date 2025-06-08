---
aliases: null
in: null
layout: layout.webc
title: Location
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - _templates
---
# Location

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [location](_templates/location.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [location](_templates/location.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [location](_templates/location.md))
```
