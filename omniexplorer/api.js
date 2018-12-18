//url:接口请求地址
//params:参数名 (参数值)
//desc:接口描述
// var res = {}

//url:search
//params:query (id/address)
//desc:按事务ID，地址或属性ID搜索
var res = {
  "data": {
    "address": {
      "balance": [
        {
          "divisible": false,
          "frozen": "0",
          "id": "3",
          "pendingneg": "0",
          "pendingpos": "0",
          "propertyinfo": {
            "active": false,
            "addedissuertokens": "0",
            "amount": "0",
            "amountraised": "93249.21601551",
            "block": 297115,
            "blockhash": "00000000000000004c93a71e1b0dd876c07cbc5ebd385ff8e5ba8379ffa1e377",
            "blocktime": 1398154020,
            "category": "Crowdsale",
            "closedearly": true,
            "closetx": "b8864525a2eef4f76a58f33a4af50dc24461445e1a420e21bcc99a1901740e79",
            "confirmations": 213140,
            "creationtxid": "86f214055a7f4f5057922fd1647e00ef31ab0a3ff15217f8b90e295f051873a7",
            "data": "SAFE Network Crowdsale (MSAFE)",
            "deadline": 1400749200,
            "divisible": false,
            "earlybonus": 10,
            "ecosystem": "main",
            "endedtime": 1398173740,
            "fee": "0.00010001",
            "fixedissuance": false,
            "flags": {},
            "ismine": false,
            "issuer": "1ARjWDkZ7kT9fwjPrjcQyvbXDkEySzKHwu",
            "issuerbonustokens": "0",
            "managedissuance": false,
            "maxtokens": false,
            "name": "MaidSafeCoin",
            "percenttoissuer": 0,
            "positioninblock": 215,
            "propertyid": 3,
            "propertyiddesired": 1,
            "propertyname": "MaidSafeCoin",
            "propertytype": "indivisible",
            "rdata": null,
            "registered": false,
            "sendingaddress": "1ARjWDkZ7kT9fwjPrjcQyvbXDkEySzKHwu",
            "starttime": 1398154020,
            "subcategory": "MaidSafe",
            "tokensissued": "452552412",
            "tokensperunit": "3400",
            "totaltokens": "452552412",
            "txid": "86f214055a7f4f5057922fd1647e00ef31ab0a3ff15217f8b90e295f051873a7",
            "type": "Create Property - Variable",
            "type_int": 51,
            "url": "www.buysafecoins.com",
            "valid": true,
            "version": 0
          },
          "reserved": "0",
          "symbol": "SP3",
          "value": "992"
        }
      ]
    },
    "asset": [
      [
        3,
        "MaidSafeCoin",
        "1ARjWDkZ7kT9fwjPrjcQyvbXDkEySzKHwu",
        null
      ]
    ],
    "tx": {}
  },
  "query": "1ARjWDkZ7kT9fwjPrjcQyvbXDkEySzKHwu",
  "status": 200
}

//url:address
//params:addr (adress)
//desc:返回给定地址的余额信息
var res = {
  "balance": [
    {
      "divisible": true, 
      "frozen": "0", 
      "id": "31", 
      "pendingneg": "0", 
      "pendingpos": "0", 
      "propertyinfo": {
        "amount": "0.00000000", 
        "block": 324140, 
        "blockhash": "00000000000000001e76250b3725547b5887329cfe3a8bb930a70e66747384d3", 
        "blocktime": 1412613555, 
        "category": "Financial and insurance activities", 
        "confirmations": 186115, 
        "creationtxid": "5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f", 
        "data": "The next paradigm of money.", 
        "divisible": true, 
        "ecosystem": "main", 
        "fee": "0.00010000", 
        "fixedissuance": false, 
        "flags": {}, 
        "freezingenabled": true, 
        "ismine": false, 
        "issuer": "3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL", 
        "managedissuance": true, 
        "name": "TetherUS", 
        "positioninblock": 767, 
        "propertyid": 31, 
        "propertyname": "TetherUS", 
        "propertytype": "divisible", 
        "rdata": null, 
        "registered": false, 
        "sendingaddress": "3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL", 
        "subcategory": "Activities auxiliary to financial service and insurance activities", 
        "totaltokens": "2520000000.00000000", 
        "txid": "5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f", 
        "type": "Create Property - Manual", 
        "type_int": 54, 
        "url": "https://tether.to", 
        "valid": true, 
        "version": 0
      }, 
      "reserved": "0", 
      "symbol": "SP31", 
      "value": "0"
    }
  ]
}

//url:property
//params:propertyid (0)
//desc:返回与查询的Property ID相关的事务列表
var res = {
  "blocktime": 1231006505, 
  "data": "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks", 
  "divisible": true, 
  "flags": {}, 
  "issuer": "Satoshi Nakamoto", 
  "name": "BTC", 
  "propertyid": 0, 
  "rdata": null, 
  "registered": false, 
  "totaltokens": "17425762", 
  "url": "http://www.bitcoin.org"
}

var res1 = {
  "amount": "0.00000000", 
  "block": 324140, 
  "blockhash": "00000000000000001e76250b3725547b5887329cfe3a8bb930a70e66747384d3", 
  "blocktime": 1412613555, 
  "category": "Financial and insurance activities", 
  "confirmations": 186115, 
  "creationtxid": "5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f", 
  "data": "The next paradigm of money.", 
  "divisible": true, 
  "ecosystem": "main", 
  "fee": "0.00010000", 
  "fixedissuance": false, 
  "flags": {}, 
  "freezingenabled": true, 
  "ismine": false,
  "issuances": [
    {
      "grant": "25000000.00000000", 
      "txid": "f307bdf50d90c92278265cd92819c787070d6652ae3c8af46fa6a96278589b03"
    }
  ],
  "issuer": "3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL", 
  "managedissuance": true, 
  "name": "TetherUS", 
  "positioninblock": 767, 
  "propertyid": 31, 
  "propertyname": "TetherUS", 
  "propertytype": "divisible", 
  "rdata": null, 
  "registered": false, 
  "sendingaddress": "3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL", 
  "subcategory": "Activities auxiliary to financial service and insurance activities", 
  "totaltokens": "2520000000.00000000", 
  "txid": "5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f", 
  "type": "Create Property - Manual", 
  "type_int": 54, 
  "url": "https://tether.to", 
  "valid": true, 
  "version": 0
}

//url:transaction
//params:address (SatoshiNakamoto)
//desc:返回查询地址的事务列表
var res = {
  "address": "SatoshiNakamoto", 
  "current_page": 0, 
  "pages": 0, 
  "transactions": []
}

//url:transaction
//params:tx (5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f)
//desc:返回查询的事务哈希的事务详细信息
var res = {
  "amount": "0.00000000", 
  "block": 324140, 
  "blockhash": "00000000000000001e76250b3725547b5887329cfe3a8bb930a70e66747384d3", 
  "blocktime": 1412613555, 
  "category": "Financial and insurance activities", 
  "confirmations": 229930, 
  "data": "The next paradigm of money.", 
  "divisible": true, 
  "ecosystem": "main", 
  "fee": "0.00010000", 
  "ismine": false, 
  "positioninblock": 767, 
  "propertyid": 31, 
  "propertyname": "TetherUS", 
  "propertytype": "divisible", 
  "sendingaddress": "3MbYQMMmSkC3AgWkj9FMo5LsPTW1zBTwXL", 
  "subcategory": "Activities auxiliary to financial service and insurance activities", 
  "txid": "5ed3694e8a4fa8d3ec5c75eb6789492c69e65511522b220e94ab51da2b6dd53f", 
  "type": "Create Property - Manual", 
  "type_int": 54, 
  "url": "https://tether.to", 
  "valid": true, 
  "version": 0
}





