const sharedPhases = require('./sharedPhases');

$$.transaction.describe("Domain", {
    add: function (alias, role, workspace, constitution, localInterface) {
        let domain = this.transaction.lookup("DomainReference", alias);
        if (!domain) {
            domain = this.transaction.createAsset("DomainReference", "init", role, alias);
        } else {
            $$.exception(`Domain with ${alias} already exists!`);
        }

        if (typeof workspace !== "undefined") {
            domain.setWorkspace(workspace);
        }

        if (typeof constitution !== "undefined") {
            domain.setConstitution(constitution);
        }

        if (typeof localInterface !== "undefined") {
            domain.addLocalInterface('local', localInterface);
        }

        this.transaction.add(domain);
        this.commit();
    },
    connectDomainLocally: function (alias, localInterface) {
        const domainReference = this.transaction.lookup("DomainReference", alias);

        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        domainReference.addLocalInterface('local', localInterface);

        this.transaction.add(domainReference);
        this.commit();
    },
    setWorkspaceForDomain: function (alias, workspace) {
        const domainReference = this.transaction.lookup("DomainReference", alias);

        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        domainReference.setWorkspace(workspace);

        this.transaction.add(domainReference);
        this.commit();
    },
    setConstitutionForDomain: function (alias, constitution) {
        let domainReference = this.transaction.lookup("DomainReference", alias);

        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        domainReference.setConstitution(constitution);

        this.transaction.add(domainReference);
        this.commit();
    },
    getDomainDetails: function (alias) {
        let domainReference = this.transaction.lookup("DomainReference", alias);

        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        return domainReference.toJson();
    },
    connectDomainToRemote(domainName, alias, remoteEndPoint) {
        let domainReference = this.transaction.lookup("DomainReference", domainName);

        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        domainReference.addRemoteInterface(alias, remoteEndPoint);

        this.transaction.add(domainReference);
        this.commit();
    },
    setEnvironmentVariable: function (alias, name, value) {
        const domainReference = this.transaction.lookup("DomainReference", alias);
        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        domainReference.setEnvironmentVariable(name, value);

        this.transaction.add(domainReference);
        this.commit();
    },
    setWorkerType: function (alias, workerType) {
        const domainReference = this.transaction.lookup("DomainReference", alias);
        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        domainReference.setWorkerType(workerType);

        this.transaction.add(domainReference);
        this.commit();
    },
    setMaximumNumberOfWorkers: function (alias, maximumNumberOfWorkers) {
        const domainReference = this.transaction.lookup("DomainReference", alias);
        if(!domainReference) {
            $$.exception(`Domain with alias ${alias} does not exist!`);
        }

        domainReference.setMaximumNumberOfWorkers(maximumNumberOfWorkers);

        this.transaction.add(domainReference);
        this.commit();
    },
    getDomainDetails: sharedPhases.getAssetFactory('global.DomainReference'),
    getDomains: sharedPhases.getAllAssetsFactory('global.DomainReference')
});
