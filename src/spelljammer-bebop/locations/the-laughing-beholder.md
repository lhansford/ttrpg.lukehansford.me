---
in:
  - '[The Rock of Bral](locations/the-rock-of-bral.md)'
aliases:
  - The Laughing Beholder
layout: layout.webc
title: The Laughing Beholder
campaignSlug: spelljammer-bebop
campaignTitle: Spelljammer Bebop
tags:
  - locations
---
# The Laughing Beholder

...

## Contains
```dataview
TABLE WITHOUT ID join(file.aliases) as "Name(s)", file.link as "Link"
FROM "locations"
WHERE icontains(in, [the-laughing-beholder](locations/the-laughing-beholder.md))
```
