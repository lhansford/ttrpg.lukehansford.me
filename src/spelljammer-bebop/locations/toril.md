---
aliases:
  - Toril
in: null
layout: layout.webc
title: Toril
---
# Toril

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```
