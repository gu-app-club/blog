---
path: "/affine-transformations"
date: "2018-02-26T04:41:53+00:00"
title: "Affine Transformations"
author: "Evan Conrad"
author_link: "https://twitter.com/flaqueeau"
---

An affine transformation is a function that maps one vector to another.

## Python Example

In the following example, we'll create an affine transformation that [translates](<https://en.wikipedia.org/wiki/Translation_(geometry)>) an x and y cordinate such that every point is moved right 10.

```python
def moveRight(x, y):
    return (x + 10, y)
```

If we apply this function to every point in a grid, we have effectively moved that entire grid to the right.

## Why this is cool

This gives us a pretty neat abstraction for moving, rotating, or reflecting 2d or 3d objects.

![grid moves right on function call](https://i.imgur.com/dsTaScv.png)
