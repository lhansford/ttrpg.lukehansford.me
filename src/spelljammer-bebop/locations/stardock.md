---
aliases:
  - Stardock
in:
  - '[[locations/the-tears-of-selune|The Tears of Selune]]'
layout: layout.webc
title: Stardock
---
# Stardock

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```
