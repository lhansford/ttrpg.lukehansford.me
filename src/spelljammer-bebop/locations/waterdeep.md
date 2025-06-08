---
aliases:
  - Waterdeep
in:
  - '[Faerun](locations/faerun.md)'
layout: layout.webc
title: Waterdeep
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Waterdeep

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [waterdeep](locations/waterdeep.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [waterdeep](locations/waterdeep.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [waterdeep](locations/waterdeep.md))
```
