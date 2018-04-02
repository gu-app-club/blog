---
path: "/apostrophe-bypass"
date: "2018-04-01T22:39:39.231Z"
title: "Bypassing checks for apostrophes in a database"
author: "Max Dulin"
---

<!-- 
This is a comment! It won't actually appear in the article. 
You can remove it if you'd like.

Edit the details in the header above please!

The date is already set to now, so you don't need to change it.

You can also remove the "author_link" line entirely 
if you don't have anything you'd like to link to.
-->

## Background
An SQL injection is when the input is crafted to to where the user can manipulate the database to do something unintended. 
Given a user and password storage, a query may look something like:   
`SELECT * FROM users WHERE password = var1  AND username = var2`  
However, when inputing this into the database, the var1 and var2 aren't that simple. Languages such as javascript force quotations to be
used correctly. So, the input turns into something like:   
``` "SELECT * FROM users WHERE password = " + var1 + " AND username =" + var2```

## Bad inputs
A user can given malicious inputs to this in order to manipulate the intended purpose of it:   
`username: hacker' OR 'A'='A`  
`password: password' OR 1+2='3`  
would bypass all filters here, then log in as the first user! 
## Mitigations
Because of the above statement, filtering has been done to avoid this.  
This led to taking out all malicious characters, such as ', " and other potentially breaking characters. 

## Avoid this filter
But, this filter can be avoided! There are functions in SQL that can be executed.  
The interesting one here is CHAR, which can turn an ASCII code, into a character.  
Now, the username: `hacker' OR 'A'='A` is equivalent to `hacker CHAR(39) OR CHAR(39)ACHAR(39)=CHAR(39)A`  
The only differene is that the second one would avoid all filters for the ' character.  
# Enjoy it!
There are so many other ways to bypass SQL code with functions; just have to understand the language, database version/software and be creative!



  
