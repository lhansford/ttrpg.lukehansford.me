---
aliases: null
in:
  - '[Bral](locations/the-rock-of-bral.md)'
layout: layout.webc
title: Xenotermination Limited
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Xenotermination Limited

Run by [Lt. Stan](npcs/lt-stan.md).

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [xenotermination-limited](locations/xenotermination-limited.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [xenotermination-limited](locations/xenotermination-limited.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [xenotermination-limited](locations/xenotermination-limited.md))
```
