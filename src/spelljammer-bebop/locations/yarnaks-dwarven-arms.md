---
aliases: null
in:
  - '[The Rock of Bral](locations/the-rock-of-bral.md)'
layout: layout.webc
title: Yarnak's Dwarven Arms
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Yarnak's Dwarven Arms

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [yarnaks-dwarven-arms](locations/yarnaks-dwarven-arms.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [yarnaks-dwarven-arms](locations/yarnaks-dwarven-arms.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [yarnaks-dwarven-arms](locations/yarnaks-dwarven-arms.md))
```
