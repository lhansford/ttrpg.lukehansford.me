---
in:
  - '[[locations/the-rock-of-bral|The Rock of Bral]]'
aliases:
  - The Laughing Beholder
layout: layout.webc
title: The Laughing Beholder
---
# The Laughing Beholder

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [[]])
```
