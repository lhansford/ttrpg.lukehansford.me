---
aliases: null
in:
  - '[Xaryxispace](locations/xaryxispace.md)'
layout: layout.webc
title: Containment Facility 53
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Containment Facility 53

![Screenshot 2025-01-05 at 13.53.13](_files/Screenshot%202025-01-05%20at%2013.53.13.png)

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [containment-facility-53](locations/containment-facility-53.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [containment-facility-53](locations/containment-facility-53.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [containment-facility-53](locations/containment-facility-53.md))
```
