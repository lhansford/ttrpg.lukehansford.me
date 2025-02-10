---
aliases: null
in:
  - '[[locations/breland|Breland]]'
layout: layout.webc
title: Whitehorn Wood
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Whitehorn Wood

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
