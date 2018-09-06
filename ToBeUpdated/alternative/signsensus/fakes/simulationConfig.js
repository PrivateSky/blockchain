


exports.config = {
    MAX_NODES          : 100,
    SIMULATION_TIMEOUT : 2000,
    PULSE_PERIODICITY  : 300,
    MAX_KEYS_COUNT     : 100,
    MAX_TRANSACTIONS   : 10000,
    MAX_TRANSACTION_TIME: 500,
    NETWORK_DELAY      : 300
};


GLOBAL_MAX_TRANSACTION_TIME = exports.config.MAX_TRANSACTION_TIME / 1000;
