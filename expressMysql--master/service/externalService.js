import crypto from 'crypto';

class ExternalService {
    constructor(){

    }

    //解密
    decode(cryptkey, iv, secretdata) {
        let
            decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv),
            decoded  = decipher.update(secretdata, 'base64', 'utf8');
        decoded += decipher.final( 'utf8' );
        return decoded;
    }

    //解密
    encode (cryptkey, iv, cleardata) {
        let
            encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv),
            encoded  = encipher.update(cleardata, 'utf8', 'base64');

        encoded += encipher.final( 'base64' );
        return encoded;
    }

    chr (codePt) {
        if (codePt > 0xFFFF) {
            codePt -= 0x10000;
            return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
        }
        return String.fromCharCode(codePt);
    }

    memberInfoDecode(secretdata){
        console.log('secretdata:', secretdata);
        let iv = this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0)+this.chr(0);
        let cryptkey = crypto.createHash('sha256').update('maiguoerueepcncecjz6833dbkdshy2cxbhsajzz0954gdjkwgarsgxjkdd3svghf').digest();
        let infoArr = this.decode(cryptkey, iv, secretdata).split('&');
        let memberInfo = [];
        infoArr.forEach(item => {
            let itemArr = item.split('=');
            memberInfo[itemArr[0]] = itemArr[1];
        });
        return memberInfo;
    }


    getClientType(ua){
        if(/like Mac OS X/.test(ua)){
            return 1;
        }else{
            return 2;
        }
        // $ = {};
        // if (/mobile/i.test(ua))
        //     $.Mobile = true;
        //
        // if (/like Mac OS X/.test(ua)) {
        //     $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
        //     $.iPhone = /iPhone/.test(ua);
        //     $.iPad = /iPad/.test(ua);
        // }
        //
        // if (/Android/.test(ua))
        //     $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];
        //
        // if (/webOS\//.test(ua))
        //     $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];
        //
        // if (/(Intel|PPC) Mac OS X/.test(ua))
        //     $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;
        //
        // if (/Windows NT/.test(ua))
        //     $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];
        // console.log($);
        // return $;
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