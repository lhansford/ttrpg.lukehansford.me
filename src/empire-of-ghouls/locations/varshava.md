---
aliases: null
in: '[[locations/krakovar|Krakovar]]'
layout: layout.webc
title: Varshava
campaignSlug: empire-of-ghouls
campaignTitle: Empire of Ghouls
tags:
  - locations
---
# Varshava

- The city of horses. Known for its horse races and excellent horse breeding.
- The leader gravely underestimated the undead threat and the city fell.
- There used to be a world tree here, dedicated to Wotan. It was raized by the undead. The smoke hand around for months and people received visions of Ragnarok.
- A spire is being built on a large cathedral there.

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
