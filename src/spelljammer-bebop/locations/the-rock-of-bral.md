---
aliases:
  - Bral
  - The Rock
  - The Rock of Bral
in:
  - '[[locations/realmspace|Realmspace]]'
layout: layout.webc
title: The Rock of Bral
---
# The Rock of Bral

Rotating asteroid. Floats around in Realmspace.

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```
