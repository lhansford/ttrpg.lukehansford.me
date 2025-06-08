---
aliases: null
in:
  - '[Vodonispace](locations/vodonispace.md)'
layout: layout.webc
title: Vodoni Prime
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Vodoni Prime

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [vodoni-prime](locations/vodoni-prime.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [vodoni-prime](locations/vodoni-prime.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [vodoni-prime](locations/vodoni-prime.md))
```
