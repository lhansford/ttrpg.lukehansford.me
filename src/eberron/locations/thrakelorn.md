---
aliases: null
in:
  - '[[locations/droaam|Droaam]]'
layout: layout.webc
title: Thrakelorn
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Thrakelorn

- Home to a small community of people like [Forgettable](pcs/forgettable.md).

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
