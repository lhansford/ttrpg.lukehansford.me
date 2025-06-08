---
aliases:
  - Tarterus
  - Carceri
in: null
layout: layout.webc
title: Carceri
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Carceri

https://forgottenrealms.fandom.com/wiki/Carceri



## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [carceri](locations/carceri.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [carceri](locations/carceri.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [carceri](locations/carceri.md))
```
