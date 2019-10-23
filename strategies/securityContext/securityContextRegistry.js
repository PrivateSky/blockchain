const TestSecurityContext = require("./testSecurityContext");
module.exports = {
    createSecurityContext(securityContextType, ...args) {
        switch (securityContextType) {
            case "CSBSecurityContext":
                return new TestSecurityContext(...args);
            default:
                $$.exception("Unknown security context type " + securityContextType);
        }
    }
};