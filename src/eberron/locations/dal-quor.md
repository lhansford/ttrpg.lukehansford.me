---
aliases:
  - Region of Dreams
in: null
layout: layout.webc
title: Dal Quor
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Dal Quor

- Home of Quori.

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
