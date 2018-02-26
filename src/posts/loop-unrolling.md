---
path: "/loop-unrolling"
date: "2018-02-25T23:37:15+00:00"
title: "Loop Unrolling and Code Optimization"
---

Loop Unrolling is an optimization technique that reduces overhead by removing instructions that control the loop such as iteration: `i++` or end-of-loop tests: `i < 5`.

A common method is to rewrite the loop as repeated statements.

## Example

We can change this:

```c
// Normal loop
int i;
for (i = 0; i < 1000; i++) {
    do(i);
}
```

to this:

```c
// Unrolled loop
int i;
for(i = 0; i < 1000; i += 3) {
    do(i);
    do(i + 1);
    do(i + 2);
}
```

[[src](https://en.wikipedia.org/wiki/Loop_unrolling#Simple_manual_example_in_C)]
