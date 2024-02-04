---
aliases:
  - Sigil
in: null
layout: layout.webc
title: Sigil
---
# Sigil

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```
