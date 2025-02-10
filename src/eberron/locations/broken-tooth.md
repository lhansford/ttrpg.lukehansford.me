---
aliases: null
in:
  - '[[locations/droaam|Droaam]]'
layout: layout.webc
title: Broken Tooth
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Broken Tooth

- Hometown of [Bumbo](pcs/bumbo.md)

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
