---
aliases: null
in:
  - '[Krynn](locations/krynn.md)'
layout: layout.webc
title: Kalaman
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Kalaman

- Important economic center on the continent of Ansalon.

![Screenshot 2024-04-07 at 10.59.02](_files/Screenshot%202024-04-07%20at%2010.59.02.png)
## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [kalaman](locations/kalaman.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [kalaman](locations/kalaman.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [kalaman](locations/kalaman.md))
```
