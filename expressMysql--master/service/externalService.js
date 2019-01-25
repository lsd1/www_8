class ExternalService {
    constructor(){

    }

    async checkSecondPwdService(uid, pwd){
        return true;
    }

    exchangeDiamondService(uid, num){
        return true;
    }

    exchangeVscService(uid, num){
        return true;
    }

}

module.exports = new ExternalService();