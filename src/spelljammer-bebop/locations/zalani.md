---
aliases: null
in:
  - '[Vodonispace](locations/vodonispace.md)'
layout: layout.webc
title: Zalani
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Zalani

- Werewolf vs gargoyles war or something.

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [zalani](locations/zalani.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [zalani](locations/zalani.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [zalani](locations/zalani.md))
```
