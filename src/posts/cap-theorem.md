---
path: "/cap-theorem"
date: "2018-02-27T23:16:36+00:00"
title: "CAP Theorem"
author: "Evan Conrad"
author_link: "https://twitter.com/flaqueeau"
---

The CAP theorem asks you to pick two of the of the following three benefits in a distributed storage system or database:
* **C**onsistency 
* **A**vailability
* **P**artition Tolerance

## Dividing a Database
Often, you may want to split up or duplicate your database. We call this **partitioning.** 

## Consistency 
Even though our database is split up, we still would like the key to refer to the same value in all our database partitions. Every read receives the most recent write or an error.

## Availability
Every time we send a request to the database, we should get a response back, even if it's not the most up-to-date. 

## Partition Tolerance 
A failure or error in one part of the database does not destroy another part.