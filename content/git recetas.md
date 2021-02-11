---
title: 'git recetas'
type: 'nota permanente'
tags: []
---

## Añadir alias global

```
git config --global alias.ALIAS '!f() { git add -A && git commit -m "MSJ" && git push; }; f'
```

