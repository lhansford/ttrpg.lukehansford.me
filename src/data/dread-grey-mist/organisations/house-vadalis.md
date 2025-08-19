---
aliases:
  - House Vadalis
  - Vadalis
---
# House Vadalis

![300x300](/_files/house-vadalis-symbol.png)

## Background


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

## Links

- [House Vadalis: Mark Miscellany \| Patreon](https://www.patreon.com/posts/house-vadalis-133796398)
- [House Vadalis: History \| Patreon](https://www.patreon.com/posts/house-vadalis-134228360)
- [House Vadalis: Structure, Customs, and Families \| Patreon](https://www.patreon.com/posts/house-vadalis-135304210)