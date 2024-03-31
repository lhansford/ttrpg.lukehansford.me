---
aliases: null
in: null
layout: layout.webc
title: The Midnight Temple
campaignSlug: empire-of-ghouls
campaignTitle: Empire of Ghouls
tags:
  - locations
---
# The Midnight Temple

- Temple to [Chernobog](other/chernobog.md).
- Formerly a temple of Sif.

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
