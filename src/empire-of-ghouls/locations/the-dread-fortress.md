---
aliases:
  - The Dread Fortress
in: '[[locations/orzelbirg|Orzelbirg]]'
layout: layout.webc
title: The Dread Fortress
campaignSlug: empire-of-ghouls
campaignTitle: Empire of Ghouls
tags:
  - locations
---
# The Dread Fortress

- Notes from [[npcs/piotr]]
	- There's a hardass darakghul guarding the gate.
	- Dungeon is at the top of the NW Tower.
	- There's chapel in the main building where they're doing all their "bullshit".
	- There's supposed to be tunnel going into the NW Tower. Maybe look around the river. Word is the lord escaped through their.

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
