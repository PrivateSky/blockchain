function EncryptedDseedList(encDseedList) {
    encDseedList = encDseedList || {};

    this.addEncryptedDseed = function (encDseed) {
        encDseedList.push(encDseed);
    }
}

module.exports = {
    createEncryptedDseedList(encDseedList){
        return new EncryptedDseedList(encDseedList);
    }
};