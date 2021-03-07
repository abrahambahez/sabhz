---
title: 'literae css'
tags:
    - 'nota-proyecto'
    - '§práctica-tecnológica'
---
## legibilidad

- tres estilos de lectura
    - [Size Matters: Balancing Line Length And Font Size In Responsive Web Design](https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/)
    - Estilos base: 16px -18px
    - line-height: 1.5
- Anchura de línea
    - [How to Tune Typography Based on **Characters Per Line**](https://pearsonified.com/characters-per-line/)
    - line-lenght: 45 to 75 caracteres (60 sin contar espacios)
    - fórmula
        - $w = CPL(F/\mu)$
        - donde: `w`: ancho de línea; `CPL`: *Characters Per Line*; `F`: ; `μ`: constante de caracter (ver *tabla de constantes*, abajo)

## sistema estándar

- **base**: 16px 
- **proportion**: 1.125 
- **line-height**: 1.5


## snippets

```css
.text-container{  
 width:calc(75*((var(--base-font)*1.125)/1.96));  
}
```

## cálculos de line-height

Si:
- 1 rem = 18px
- scale ratio = 1.125

Entonces:
- -1 = 1 1. .125 = .875
- 1 = 1
- 2° = 1.125
- 3° = 1.125*1.125 = 1.265
- 4° = 1.265 - 1.125 = 1.424
- 5° = 1.424 - 1.125 = 1.6
- 6° = 1.6 - 1.125 = 1.8

## tabla de constantes de caracter
De acuerdo con <https://pearsonified.com/characters-per-line/>

### serif
- American Typewriter — 2.09
- Baskerville — 2.51
- Georgia — 2.27
- Hoefler Text — 2.39
- Palatino — 2.26
- Times New Roman — 2.48

### sans-serif
- Arial — 2.26
- Gill Sans — 2.47
- Gill Sans 300 — 2.58
- Helvetica Neue — 2.24
- Lucida Grande — 2.05
- Tahoma — 2.25
- Trebuchet MS — 2.2
- Verdana — 1.96

### mono
- Courier New — 1.67