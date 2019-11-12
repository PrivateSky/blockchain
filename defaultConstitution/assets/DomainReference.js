
$$.asset.describe("DomainReference", {
    public:{
        role:"string:index",
        alias:"string:key",
        addresses:"map",
        constitution:"string",
        workspace:"string",
        remoteInterfaces:"map",
        localInterfaces:"map",
        communicationInterfaces: "map",
        maximumNumberOfWorkers: "number",
        workerStrategy: "string"
    },
    init:function(role, alias){
        this.role = role;
        this.alias = alias;
        this.addresses = {};
        this.remoteInterfaces = {};
        this.localInterfaces = {};
        this.communicationInterfaces = {};
        this.workerStrategy = 'threads';
    },
    updateDomainAddress:function(replicationAgent, address){
        if(!this.addresses){
            this.addresses = {};
        }
        this.addresses[replicationAgent] = address;
    },
    removeDomainAddress:function(replicationAgent){
        this.addresses[replicationAgent] = undefined;
        delete this.addresses[replicationAgent];
    },
    addRemoteInterface:function(alias, remoteEndPoint){
        if(!this.remoteInterfaces){
            this.remoteInterfaces = {};
        }
        this.remoteInterfaces[alias] = remoteEndPoint;
    },
    removeRemoteInterface:function(alias){
        if(this.remoteInterface){
            this.remoteInterfaces[alias] = undefined;
            delete this.remoteInterfaces[alias];
        }
    },
    addLocalInterface:function(alias, path){
        if(!this.localInterfaces){
            this.localInterfaces = {};
        }
        this.localInterfaces[alias] = path;
    },
    removeLocalInterface:function(alias){
        if(this.localInterfaces){
            this.localInterfaces[alias] = undefined;
            delete this.localInterfaces[alias];
        }
    },
    setConstitution:function(pathOrUrlOrCSB){
        this.constitution = pathOrUrlOrCSB;
    },
    getConstitution:function(){
        return this.constitution;
    },
    setWorkspace:function(path){
        this.workspace = path;
    },
    getWorkspace:function(){
        return this.workspace;
    },
    addCommunicationInterface(alias, virtualMQEndpoint, zeroMQEndpoint) {
        if (!this.communicationInterfaces) {
            this.communicationInterfaces = {};
        }
        this.communicationInterfaces[alias] = {virtualMQ: virtualMQEndpoint, zeroMQ: zeroMQEndpoint};
    },
    setMaximumNumberOfWorkers: function(maximumNumberOfWorkers) {
        this.maximumNumberOfWorkers = maximumNumberOfWorkers;
    },
    setWorkerStrategy: function(workerStrategy) {
        this.workerStrategy = workerStrategy;
    }
});