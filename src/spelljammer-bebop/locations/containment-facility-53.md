---
aliases: null
in: null
layout: layout.webc
title: Containment Facility 53
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Containment Facility 53

![](Screenshot%202025-01-05%20at%2013.53.13.png)

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
