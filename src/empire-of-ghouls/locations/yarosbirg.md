---
aliases:
  - Yarosbirg
in: '[[locations/morgau|Morgau]]'
layout: layout.webc
title: Yarosbirg
campaignSlug: empire-of-ghouls
campaignTitle: Empire of Ghouls
tags:
  - locations
---
# Yarosbirg

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
