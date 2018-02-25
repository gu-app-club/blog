---
path: "/littles-law"
date: "2018-02-25T23:03:59+00:00"
title: "Little's Law"
---

Little's Law is a theorem in [queueing theory](https://en.wikipedia.org/wiki/Queueing_theory)
that the average number of items in [a queue](https://www.hackerearth.com/practice/data-structures/queues/basics-of-queues/tutorial/) is equal to the average arrival rate multiplied by the average time the item spends in the queue.

Expressed in code, this looks like this

```python
numberOfItemsInQueue = averageArrivalRate * averageTimeInQueue
```

## The interesting bit

Little's law show's us that this relationship is "not influenced by the arrival process distribution, the service distribution, the service order, or practically anything else." ([src](https://pubsonline.informs.org/doi/abs/10.1287/opre.1110.0941))

## Why this is important

If we know the average response times and total requests per second, we can estimate the maximum concurrent users on a web server. ([src](https://perfwork.wordpress.com/tag/littles-law/))
