---
path: "/data-dependencies"
date: "2018-02-27T01:09:23+00:00"
title: "Data Dependencies"
author: "Evan Conrad"
author_link: "https://twitter.com/flaqueeau"
---

A data dependency is a situation in which one part of a program depends on another's memory in order to work.

## Example

```python
a = 10
b = a # Data dependency
c = b # Data dependency
```

Data dependencies cause problems when creating parallel programs because each line must run sequentially.

## As a graph

Like any dependency, we can represent data dependencies as a [directed graph](http://mathworld.wolfram.com/DirectedGraph.html).

![directed graph](https://i.imgur.com/oUMalNT.png)
