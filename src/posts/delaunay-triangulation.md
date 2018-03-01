---
path: "/delaunay-triangulation"
date: "2018-02-26T04:41:53+00:00"
title: "Delaunay Triangulation"
author: "Kathrine Gibson"
author_link: "https:linkedin.com/in/kathrine-gibson"
---

Delaunay Triangulation is a trigonometrical technique that creates a triangular mesh, avoiding sliver triangles. [Here's](<https://people.eecs.berkeley.edu/~jrs/papers/meshbook/chapter2.pdf>) a more formal definition. 

## How to Implement 
There are [five algorithms](<https://en.wikibooks.org/wiki/Trigonometry/For_Enthusiasts/Delaunay_triangulation#Algorithms>) to compute Delaunay triangulations but all rely on the making a polygon into a bunch of triangles and then making sure no point is in the [circumcircle](<http://mathworld.wolfram.com/Circumcircle.html>) of any triangle.

## What is this used for 

* To create nice triangular meshes for [graphic design](<https://www.behance.net/search?content=projects&user_tags=1872977>), numerical analysis, modeling terrain, etc
* [Minimum spanning trees](<https://en.wikipedia.org/wiki/Minimum_spanning_tree>)
* Voronoi diagrams

## Some pretty examples
![Delaunay triangulation 2D](http://www.geom.at/wp/wp-content/uploads/constrained_delaunay.jpg)

[Source](http://www.geom.at/wp/wp-content/uploads/constrained_delaunay.jpg)

![Buddha Delaunay triangulation](https://tomaszjaniak.files.wordpress.com/2011/07/delaunay2.jpg)

[Source](https://tomaszjaniak.files.wordpress.com/2011/07/delaunay2.jpg)

![Empire State Building Delaunay triangulation](http://www.gogeometry.com/computational_geometry/delaunay-triangulation/empire-state-building-delaunay-triangulation.jpg)

[Source](<http://www.gogeometry.com/computational_geometry/delaunay-triangulation/empire-state-building-delaunay-triangulation.jpg>)
