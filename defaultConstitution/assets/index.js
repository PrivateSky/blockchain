module.exports = $$.library(function(){
    require("./DomainReference");
    require("./Agent");
    require("./Backup");
    require("./ACLScope");
    require("./Key");
    require("../transactions/transactions");
    require("./FileAnchor");
    require("./BarAnchor");
    require('./CSBMeta');
});