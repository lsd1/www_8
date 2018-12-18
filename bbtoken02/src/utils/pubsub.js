/*
* @Author: Administrator
* @Date:   2018-08-10 00:29:02
* @Last Modified by:   Administrator
* @Last Modified time: 2018-08-10 00:29:58
*/
export  const pubsub = (function(){
    var q = {},
        topics = {},
        subUid = -1;
    //发布消息
    q.publish = function(topic, args) {
        if(!topics[topic]) {return;}
        var subs = topics[topic],
            len = subs.length;
        while(len--) {
            subs[len].func(topic, args);
        }
    };
    //订阅事件
    q.subscribe = function(topic, func) {
        topics[topic] = topics[topic] ? topics[topic] : [];
        var token = (++subUid).toString();
        topics[topic].push({
            token : token,
            func : func
        });
        return token;
    };
    return q;
    //取消订阅就不写了，遍历topics，然后通过保存前面返回token，删除指定元素
})();