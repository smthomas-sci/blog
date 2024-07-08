# How do I write articles and add them to this blog?


The blog is controller by the `initialise.js` and `directory.json`
files.

Articles are simply HTML files. In the future I will look at making
them markdown to make the writing process nicer.


### How to add a new article

1. Create a new article directory in `articles` e.g. `articles/one-free-miracle`
2. Create a article file of the same name in `article` e.g `articles/One-Free-Miracle.html`
3. Write the content of the article in the `.html` file.
4. Once complete, add the metadata of the article to the `data/directory.json` file
5. To publish, include the article id in the `"article" : { "ids": []}` array.



