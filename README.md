# Bits blog

This is the repo for GUMAD's tech blog. If you're interested in submitting an article, please make a pull request that adds a markdown file to `src/posts`. See [here](http://blog.gumad.club/publishing) for rules and more information.

## Project stack 

This project is built in [gatsbyjs](https://www.gatsbyjs.org/), a framework for building web frontends on the [JAMStack](https://jamstack.org/).

## Setting up the project 

We use [yarn](https://yarnpkg.com/en/) as our package manager. If you're used to `npm`, you're welcome to use that too though we can't guarantee everything will work the same.

After you have cloned the project, run the following:

```
cd ./blog
yarn
```

And... your done! This blog uses no database, so it's pretty simple to setup. And, since all our data is stored in the repo, you're *always* working with the same information you see on the production site which means we rarely get "worked on my machine" bugs. 

## Running the project 

Once you've set everything up, you can run the following to start the development mode:

```
yarn dev
```

This will start a local instance of the website running at `http://localhost:8000/`. Open it up in your browser to see the site! 