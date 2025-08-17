---
aliases:
  - House Cannith
  - Cannith
---
# House Cannith

## Members
```base
filters:
  and:
    - file.properties['memberOf'].filter(value.contains(this.file.name)).length > 0
formulas:
  Name: aliases[0]
views:
  - type: cards
    name: Table
    order:
      - formula.Name
    sort:
      - property: file.name
        direction: ASC
      - property: aliases
        direction: ASC
    image: note.banner
    imageFit: ""
    imageAspectRatio: 0.5

```