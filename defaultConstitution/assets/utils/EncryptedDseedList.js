function EncryptedDseedList() {
    this.encDseedList = {};

    this.addEncryptedDseed = function (encDseed) {
        this.push(encDseed);
    }

}

module.exports = {
    createEncryptedDseedList(encDseedList){
        return new EncryptedDseedList(encDseedList);
    }
};