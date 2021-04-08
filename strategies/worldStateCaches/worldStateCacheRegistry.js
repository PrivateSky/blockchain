module.exports = {
    createCache: function (cacheType, ...args) {
        switch (cacheType) {
            case "fs":
                const LocalWSCache = require("./storages/LocalWSCache");
                return new LocalWSCache(...args);
            case "bar":
                const BarCache = require("./storages/BarCache");
                return new BarCache(...args);
            case "memory":
                const MemoryCache = require("./storages/MemoryCache");
                return new MemoryCache(...args);
            default:
                $$.exception("Unknown blockchain cache " + cacheType);
        }
    },
};
