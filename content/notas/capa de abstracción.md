---
title: 'capa de abstracción'
type: 'término'
tags: []
---

Una capa de abstracción consiste en separar procesos para poder reusar sus características formales en múltiples contextos.

Funciona al quitarle a un proceso o sistema todas sus particularidades, toda referencia a su contexto, encapsular sus elementos, sus relaciones y sus reglas de interacción para poder hacerlo disponible a diferentes usos (implementaciones) que puedan beneficiarse de él.

De este modo **los detalles del contexto y sus particularidades quedan ocultos**, no es necesario ni conocer ni ocuparse de ellos sino solamente de sus entradas y salidas (modelo de caja negra).

Según [Wikipedia](https://es.wikipedia.org/wiki/Capa_de_abstracci%C3%B3n):

>un nivel de abstracción es una generalización de un modelo o [algoritmo](https://es.wikipedia.org/wiki/Algoritmo "Algoritmo"), totalmente independiente de cualquier implementación específica. Estas generalizaciones surgen de similitudes que están muy bien encapsuladas mediante modelos que expresan similitudes presentes en varias implementaciones específicas. La simplificación suministrada por una buena capa de abstracción permite una fácil reutilización.


## Relación entre capas de abstracción y niveles de *indirección*

A veces se relacionan con el concepto de **indirección**, sobre todo por una confusión sobre la famosa frase de David Wheeler: *«All problems in computer science can be solved by another level of indirection»*, donde la referencia a la indirección se suele sustituir por *«layer of abstraction» *

Según Diomidis Spinellis, en [Beautiful Code: Another Level of Indirection](https://www2.dmst.aueb.gr/dds/pubs/inbook/beautiful_code/html/Spi07g.html), comenta sobre esa cita lo sieguiente:

>The quote rings in my head on various occasions: when I am forced to talk to a secretary instead of the person I wish to communicate with, when I first travel east to Frankfurt in order to finally fly west to Shanghai or Bangalore, and—yes—when I examine a complex system's source code.

---

Ejemplos informáticos de capas de abstracción:

- Compiladores
- Lenguajes de programación de alto nivel
- APIs
- Frameworks

## Referencias

Spinellis, D. (2007). Another level of indirection. En A. Oram & G. Wilson (Eds.), _Beautiful code: Leading programmers explain how they think_ (pp. 279-291). O’Reilly and Associates. [link](http://www.dmst.aueb.gr/dds/pubs/inbook/beautiful<sub>c</sub>ode/html/Spi07g.html)