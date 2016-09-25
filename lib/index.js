"use strict";

module.exports = class BloggifyPluginManager {

    static init (config, bloggify, ready) {
        bloggify.pluginManager = new BloggifyPluginManager(bloggify, config);
        bloggify.pluginManager.installAll(ready);
    }

    constructor (bloggify, config) {
        this.bloggify = bloggify;
        this._plugins = bloggify.options.plugins;
        this.config = config;
    }

    installAll (cb) {
        this.bloggify.pluginLoader.loadAll(this.config.plugins, cb);
    }
};

