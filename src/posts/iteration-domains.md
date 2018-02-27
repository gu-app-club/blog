---
path: "/iteration-domains"
date: "2018-02-26T04:41:53+00:00"
title: "Iteration Domains: Let's Draw Shapes"
author: "Evan Conrad"
author_link: "https://twitter.com/flaqueeau"
---

An **iteration domain** is the total range of values
that a program is iterating over.

## Example

Take the following code:

```C++
for (int i = 0; i < 6; i++) {
    for (int j = i; j < 10; j++) {
        // Do something
    }
}
```

If we plot a point at every `i` and `j` value, we've mapped the "iteration domain" of the program:

![Visualization of Iteration Domain](https://i.imgur.com/O4eE95T.png)

[Source](https://www.cs.indiana.edu/~achauhan/Teaching/B629/2010-Fall/StudentPresns/PolyhedralModelOverview.pdf)
