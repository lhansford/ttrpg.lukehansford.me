---
aliases:
  - Haven
in:
  - '[[locations/realmspace|Realmspace]]'
layout: layout.webc
title: Haven
---
# Haven

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```
