---
path: "/loop-unrolling"
date: "2018-02-25T23:37:15+00:00"
title: "Loop Unrolling and Code Optimization"
---

Loop Unrolling is an optimization technique that reduces overhead by removing instructions that control the loop such as iteration: `i++` or end-of-loop tests: `i < 5`.

## Static vs Dynamic Loop Unrolling

If the programmer discovers the overhead and makes changes themselves, then we refer to it as "manual" or "static" loop unrolling. A compiler can do this automagically and apply different amounts of repeated instructions "dynamically."

### Example

A common method is to rewrite the loop as repeated statements.

Change this thing:

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
