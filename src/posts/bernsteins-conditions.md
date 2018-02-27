---
path: "/bernstein-conditions"
date: "2018-02-27T21:06:05+00:00"
title: "Bernstein Conditions"
author: "Evan Conrad"
author_link: "https://twitter.com/flaqueeau"
---

Bernstein conditions are a set of formal rules that will let you determine if two pieces of code can be run in parallel. 

These rules are as follows:
* The inputs into the first piece of code cannot be the same memory as the outputs of the second piece of code.
* The inputs into the second piece of code cannot be the same memory as the outputs of the first piece.
* The outputs of both programs cannot be the same memory. 

In other words, the pieces of code cannot share a [data dependency.](/data-dependencies) If they did, then you would have to run one program before the other! 

Expressed mathematically, we can view it as:

```python
condition_1 = union(inputMemory_2, outputMemory_1) == null
condition_2 = union(inputMemory_1, outputMemory_2) == null
condition_3 = union(outputMemory_1, outputMemory_2) == null
```