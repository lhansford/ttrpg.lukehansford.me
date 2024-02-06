---
aliases: null
in:
  - '[[locations/duskwood|Duskwood]]'
layout: layout.webc
title: Tomb of Lost Heroes
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Tomb of Lost Heroes

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
