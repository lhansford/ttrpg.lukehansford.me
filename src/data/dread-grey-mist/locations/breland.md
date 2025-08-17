---
aliases:
  - Breland
in: "[[locations/khorvaire|Khorvaire]]"
---
# Breland

## Contains
```base
filters:
  and:
    - file.properties.in.contains(this.file.name)
    - file.inFolder("locations")
formulas:
  Title: file.name.title()
views:
  - type: cards
    name: Table
    order:
      - formula.Title
    sort:
      - property: file.name
        direction: ASC
      - property: aliases
        direction: ASC
    image: note.banner
    imageFit: ""
    imageAspectRatio: 0.65

```

## People from here
```base
filters:
  and:
    - file.properties.from.contains(this.file.name)
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
    imageAspectRatio: 0.65

```