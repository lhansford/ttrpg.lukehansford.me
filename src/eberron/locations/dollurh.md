---
aliases:
  - The Realm of the Dead
in: null
layout: layout.webc
title: Dollurh
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Dollurh

- Home plane of [The Queen of the Dead](other/the-queen-of-the-dead.md).

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
