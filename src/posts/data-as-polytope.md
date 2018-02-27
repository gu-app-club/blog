---
path: "/data-dependencies-as-polytopes"
date: "2018-02-27T19:02:31+00:00"
title: "Data Dependencies as Polytopes"
author: "Evan Conrad"
author_link: "https://twitter.com/flaqueeau"
---

We've seen [before](http://bits.gumad.club/data-dependencies) that we can represent data dependencies as a graph. But we can also represent them as a [polytope](http://bits.gumad.club/polytopes)!

Instead of a solid shape, we'll use a [lattice](<https://en.wikipedia.org/wiki/Lattice_(group)>) or a series of points on a grid that loosely resemble a polygon.

## Example

In the image below, every node represents a piece of data that can depend on another.

So the red node depends on the gray node in the top left corner. Likewise, the green node depends on the red node.

![graph lattice](https://i.imgur.com/rQ1RxLy.png)[1]

---

[1][wikimedia commons](https://upload.wikimedia.org/wikipedia/commons/1/1e/Polytope_model_unskewed.svg)
