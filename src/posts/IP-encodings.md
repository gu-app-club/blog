---
path: "/IP-encodings"
date: "2018-02-26T04:41:53+00:00"
title: "IP Address Encodings for Browsers"
author: "Maxwell Dulin"
author_link: "https://github.com/mdulin2"
---

Typically, an IP address is seen in the form x.x.x.x, which is four octets that are hexadecimal, going up to 255.
But, an IP address can be interpreted in multiple ways depending on the browser...
I did all of these on the Chrome Browser, but Firefox should also work:

## Hexadecimal

<b> google.com </b>  
http://74.125.28.113

## Decimal

<b> google.com </b>  
http://1249713252

## Octal

<b> google.com </b>  
 http://0112.0175.0034.0213

But, it doesn't stop here! They can be mixed and matched.

# Mixed

octal.octal.hex.hex  
<b> google.com </b>  
http://0112.0175.28.101

## Why this is cool

Just something different! This could trick system that track strictly on the conventionally IP address scheme that's used.

### More

For more products like this, visit https://github.com/mdulin2/encode-library
