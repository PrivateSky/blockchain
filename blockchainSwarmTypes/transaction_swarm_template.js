let CNST = require("../moduleConstants");

exports.createForObject = function(valueObject, thisObject, localId){
	let callflowModule = require("callflow");

	let _blockchain = undefined;
	let ret = callflowModule.createStandardAPIsForSwarms(valueObject, thisObject, localId);
	ret.swarm           = null;
	ret.onReturn        = null;
	ret.onResult        = null;
	ret.asyncReturn     = null;
	ret.autoInit        = function(blockchain){
		_blockchain = blockchain;
		thisObject.transaction = blockchain.beginTransaction(thisObject);
	};

	ret.commit = function () {
		_blockchain.commit(thisObject.transaction, (error, status) => {
			thisObject.transaction.getSwarm().notify({eventType: "commit", error, status});
		});
	};

	ret.onCommit = function (callback) {
		thisObject.observe((event) => {
			callback(event.error, event.status);
		}, undefined, (event)=>{
			return event.eventType === "commit";
		});
	};

	ret.onReturn = function (callback) {
		thisObject.observe((event) => {
			callback(event.error, event.result);
		}, undefined, (event)=>{
			return event.eventType === "return";
		});
	};

	ret.return = function(error, result){
		thisObject.notify({eventType: "return", error, result});
	};

	ret.home = ret.return;

	return ret;
};