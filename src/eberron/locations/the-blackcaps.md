---
aliases: null
in:
  - '[[locations/breland|Breland]]'
  - '[[locations/aundair|Aundair]]'
layout: layout.webc
title: The Blackcaps
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# The Blackcaps

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
