---
aliases: null
in:
  - '[[locations/shadow-marches|Shadow Marshes]]'
layout: layout.webc
title: Goldmire
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Goldmire

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
