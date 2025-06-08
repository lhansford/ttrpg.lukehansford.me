---
aliases: null
in:
  - '[Vodonispace](locations/vodonispace.md)'
layout: layout.webc
title: Port Drogheda
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# Port Drogheda

- 

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [port-drogheda](locations/port-drogheda.md))
```

## People from here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(origin, [port-drogheda](locations/port-drogheda.md))
```

## People located here

```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
WHERE icontains(location, [port-drogheda](locations/port-drogheda.md))
```
