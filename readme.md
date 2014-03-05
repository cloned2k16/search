# [Bower search](http://bower.io/search)

> Search for [Bower](http://bower.io) packages

Make sure to include [`keywords` in your bower.json](https://docs.google.com/document/d/1APq7oA9tNao1UYWyOm8dKqlRP2blVkROYLZ2fLIjtWc/edit#heading=h.gexwkmadfy56) as the search will make use of those.

Check out the [back-end](https://github.com/bower/search-server) to see how the data is aggregated.

It usually takes an hour for new components to show up on the site.

*Issues regarding packages should be reported on the [Bower repo](https://github.com/bower/bower/issues/new).*

## Using

    $ npm install
    $ bower install
    $ grunt serve

Open http://localhost:9001 in your browser.

### Blacklist packages

To hide duplicate package names, add the names to `js/config/ignore.js` file.

You can easily generate a file containing packages that need to be taken care of for duplicates by running:

    $ grunt duplicates

This will then create a `duplicate.json` file. Each item is keyed by its URL, containing its names.

For example, if a specific URL has 3 names, 2 of them should be treated as duplicates, and they should end up in `ignore.js` file.

## Credit

[![Fahad Ibnay Heylaal](http://gravatar.com/avatar/19a3655e6ba9e5a496ee690ba03f2180?s=144)](http://fahad19.com) | [![Sindre Sorhus](http://gravatar.com/avatar/d36a92237c75c5337c17b60d90686bf9?s=144)](http://sindresorhus.com)
:---:|:---:
[Fahad Ibnay Heylaal](http://fahad19.com) *(maintainer)* | [Sindre Sorhus](http://sindresorhus.com)


## License

MIT © [The Bower team](http://bower.io)
