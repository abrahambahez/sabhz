---
title: 'git recetas'
type: 'nota permanente'
tags: ['huérfana']
---

## Añadir alias global

```
git config --global alias.ALIAS '!f() { git add -A && git commit -m "MSJ" && git push; }; f'
```
fuente: https://stackoverflow.com/questions/19595067/git-add-commit-and-push-commands-in-one

