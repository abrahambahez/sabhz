---
title: 'Informal Ontology Design: A Wiki-Based Assertion Framework'
aliases: ['Informal Ontology Design: A Wiki-Based Assertion Framework', 'Murray Altheim (2008, agosto 15)']
initial_read: 2021-02-26
source_type: conferencia
authors: 
    - Altheim, Murray
year: 
apa: 'Altheim, M. (2008, agosto 15). Informal Ontology Design: A Wiki-Based Assertion Framework. Balisage: The Markup Conference 2008, Montréal, Canada. https://doi.org/10.4242/BalisageVol1.Altheim01'
tags:
    - 'nota-referencia'
    - 'leyendo'
    - '+inconclusa'
---

## Resumen esquemático

Altheim muestra en la conferencia el diseño de un marco de aserción tipo Wiki que permite construir una [[ontología informal]], discutiendo algunas soluciones específicas de las herramientas lógicas usadas tradicionalmente por la [[ontología informacional]]. Dejo de lado la implementación específica y destaco la discusión
   
### enlaces de categoría
    
Los enlaces de categoría son hipervínculos que categorizan páginas de un sistema tipo *wiki*.

En las ciencias bibliotecnonómicas, la indexación basada en el lenguaje abierto permite asignar cualquier palabra para usarla como un término indexado. (párr. 2)

Sin embargo, ambas implementaciones padecen de errores debido a errores de coicididencia entre el contenido y los términos de búsqueda así como la falta de control de la terminología (párr. 2)
        
### sistemas de clasificación
    
los esquemas de clasificación enumerativos (cfr. [[taxonomía#jerárquica]] tienen el problema de su inflexibilidad. La mayoría de los objetos **no pertenecen a una única categoría**.

>*«[...] they are inflexible, don't take account of the fact that most resources don't fit neatly into one category (e.g., a book on 19th century French seascape paintings fits into at least four), and there is no ability to map context.»* (párr. 6)
        
### representación del conocimiento
    
Similar al problema que esboza [[@luhmannLearningHowRead#^parr-5]], [[el lenguaje natural desborda los alcances de la formalización]] debido a su capacidad polisémica, ambigua y sorprendentemente amplia para expresar una idea de múltiples formas.

>*«Any system dealing with the interplay of knowledge representation and phenomenology is also complicated by the presence of ambiguity in natural language.»* (párr. 3)

La propia palabra *conocimiento* no está lo suficientemente formalizada en un sentido unívoco y realista; por esa razón, su uso dentro de la práctica de la [[ontología informacional]] podría considerarse *informal*; esto es porque [[el lenguaje natural desborda los alcances de la formalización]]

*«As Allen Newell noted in his influential address to the AI community, The Knowledge Level Newell, the use of the term “knowledge” within that community is “informal”»* (párr. 3)
        
### semántica web
    
the systems themselves must have found solutions to some rather nagging epistemological problems, in particular the connection between informal language usage, computational linguistics and formal logic. (párr. 6)

Robert Brandom (citado en los párr. 7-9) distingue entre una dimensión *proposicional* (lo dicho) y *representacional* (¿lo referido?), un problema esencialmente semiótico, 

>*«present a view of the relation between what is said or thought and what it is said or thought about. The former is the propositional dimension of thought and talk, and the latter is its representational dimension. The question I address is why any state or utterance that has propositional content also should be understood as having representational content.»* Robert Brandom (citado en párr. 8)

Este problema lleva a admitir que en realidad, los esfuerzos por representar el conocimiento no lo hacen de una forma filosóficamente *realista*, sino *constructivista* (el conocimiento es construido socialmente a través del acuerdo de las comunidades que usan un dominio de lenguaje, cfr. el debate sobre el realismo científico en [[@baker2020classificationAndKinds]])

>*«**A key proposition here is that the entire enterprise of shared representation is a form of social agreement,** an instance of human communication, not an expression of a universal truth, and that the value of a proposition is not its truth but its utility.»* (párr. 10)
        
### informalidad ontológica

Para Altheim, diseñar un sistema basado en la lógica formal es menos preferible que hacerlo a través de una consideración nueva: **la de una forma de comunicación humana** (similar a cómo [[@luhmann1981communicating]] entiende a su sistema como un *compañero comunicativo*).
    
>*«The design is therefore distinctly informal, i.e., it is not backed by a formal model conforming to any foundationalist or otherwise representational logic. Its organizational structure is instead considered as a form of human communication — a classification system with no a priori terms — where the meaning of a term is identified entirely with its usage [...] In this regard the system should not be considered formal in any sense; it is by definition a system that supports an informal ontology.»* (párr. 1)

De modo que es más seguro diseñar un sistema que es desde el origen una herramienta informal con la aclaración de que no contiene valores condicionales de verdad y cuyo objetivo es **facilitar las expresiones de la comunicación humana**.
        
### Wikis semánticas
    
Las Wikis sempanticas en muchos casos pueden contener un marco lógico aunque no implique un esquema de clasificación

In many cases these “semantic wikis” may provide a logical framework but often no classification scheme whatsoever, so we may have IsSubclassOf but nothing to subclass

- Many if not most of these problems are insurmountable unless one forces users to understand and follow proscriptive rules
        
### The Wrong Solution to the Wrong Problem
    
- almost nothing has been done to breach the epistemological divide between knowledge representation theory and the real world of language and human culture

- or perhaps to stop using formal logic to describe the informal world and go elsewhere for a solution to the problem of organizing information.
        
### Librarians are Sexy
    
- El problema de un desconocimiento interdisciplinario de las ciencias de clasificación de información y de la ingenería del conocimiento da pie a malentendidos o caminos diferenciados para entender el conocimiento, la información y sus derivados. Altheim recomienda escuchar a la:os bibliotecónoma:os
- we need information organization a lot more than we need robotic butlers, even if we did have complete trust in their ability to make important decisions for us
        
### El proyecto Ceryle
    
- https://web.archive.org/web/20061029221717/http://www.altheim.com/ceryle/docs/screenshots.html
- develop a software application to organize notes, planning documents, bibliographic references and other research materials, a document management system that permitted user creation and management of its own classification system, a bounded (but only partly-controlled) vocabulary of terms and relations between those terms, where each term must be defined, and all relations typed, again by a defined term. (párr. 1)
        
### un «marco de aserción» estilo «wiki»
    
- La [aserción en sentido informático](https://es.wikipedia.org/wiki/Aserci%C3%B3n_(inform%C3%A1tica)) es un predicado (evaluable como falso o verdadero) sobre el cual se pueden establecer operaciones basadas en estados informacionales.
- La propuesta de Altheim es una librería llamada «AssertionFramework», capaz de categorizar, clasificary organizar un _corpus_ de documentos a partir de abstracciones que permiten crear aserciones para crear una ontología informal (Design, párr.1)
        
  #### Clasificación versus ontología
        
    - We have a readily available solution for an organizational structure that avoids the epistemological conundrums of computer-based ontologies by appealing to the functional (i.e., functionalist) approach of classification systems within library science.
    - The terms in a subject language differ referentially from those in ontology or in natural language in that they do not refer to entities or concepts in the real world but to subjects.        
        - ==The extensional meaning of a term in a subject language does not refer to the class of all entities denoted by the term but to the class of documents that the term denotes.==

## Referencias

Altheim, M. (2008, agosto 15). _Informal Ontology Design: A Wiki-Based Assertion Framework_. Balisage: The Markup Conference 2008, Montréal, Canada. [https://doi.org/10.4242/BalisageVol1.Altheim01](https://doi.org/10.4242/BalisageVol1.Altheim01)
