"use strict";

const gitModuleInstaller = require("git-module-installer");

module.exports = class BloggifyPluginManager {
    static init (config, bloggify, ready) {
        bloggify.pluginManager = new BloggifyPluginManager(bloggify);
        bloggify.pluginManager.installAll(ready);
    }
    constructor (bloggify) {
        this.bloggify = bloggify;
        this._plugins = bloggify.options.plugins;
    }
    installAll (cb) {
        this.downloadAll((err, plugins) => {
            if (err) { return cb(err); }
            this.bloggify.pluginLoader.loadAll(cb);
        });
    }

    downloadAll (cb) {
        let pluginsToDownload = this._plugins.map(c => ({
            source: c.source
          , path: c.path || c.name
        })).filter(c => c.source);

        if (!pluginsToDownload.length) {
            return cb(null, []);
        }
    }
};

