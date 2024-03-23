---
aliases: null
in:
  - '[[locations/aundair|Aundair]]'
  - '[[locations/khorvaire|Khorvaire]]'
layout: layout.webc
title: Arcanix
campaignSlug: eberron
campaignTitle: Eberron
tags:
  - locations
---
# Arcanix

- Location of a wizarding school.
	- Train wizards, magewrights, artificiers.
	- Home to the "Arcane Congress", magical advisors to the Queen of [Aundair](locations/aundair.md).
- A small village. Many call it "the floating towers of Arcanix".
- There are four floating towers.
	- Glarehold, Amberhold. The towers  dedicated to students.
	- Nocturnus and Skyreach are occupied by powerful wizards, including one Adal something something.
		- Adal is the most powerful wizard in [Aundair](locations/aundair.md) and right-hand to the Queen.
- Home to some of the most powerful magic users in [Khorvaire](locations/khorvaire.md)

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
