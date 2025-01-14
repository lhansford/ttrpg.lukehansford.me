---
aliases:
  - Realm of Madness
  - PoM
  - Plane of Madness
in: null
layout: layout.webc
title: Xoriat
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Xoriat

...

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
