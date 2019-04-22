import { post, get, request } from './flyHttp.js'
// import empty from 'is-empty'

// 带参数
export const getBaiduDetail = (data = {}, msg = '') => get(`https://www.baidu.com`, data, msg)
export const postBaiduDetail = (data = {}, msg = '') => post(`https://www.baidu.com`, data, msg)

// 请求登录接口
export const login = (data = {}, option = {}) => request(`v5.0/login/wechat_mp`, data, { method: 'post', baseUrl: 'https://test-api.maiguoer.com/' })

// 校验手机号
export const checkMobile = (data = {}, option = {}) => request(`v5.0/register/check_mobile_oauth`, data, { method: 'post', baseUrl: 'https://test-api.maiguoer.com/' })

// 发送短信验证码
export const sendVerifyCode = (data = {}, option = {}) => request(`v5.0/register/send_verify_code_oauth`, data, { method: 'post', baseUrl: 'https://test-api.maiguoer.com/' })

// 提交注册
export const register = (data = {}, option = {}) => request(`v5.0/register/oauth`, data, { method: 'post', baseUrl: 'https://test-api.maiguoer.com/' })

// 校验二级密码
export const checkSecondPwd = (data = {}, option = {}) => request(`v5.0/secpwd/verify`, data, { method: 'post', baseUrl: 'https://test-api.maiguoer.com/' })

// 获取首页数据
export const getIndexData = (data = {}, msg = '') => get(`v5.0/home`, data, msg)
export const getComments = (data = {}, msg = '') => get(`v5.0/comments`, data, msg)
// export const getIndexData = (data = {}, msg = '') => {
//   return new Promise((resolve, reject) => {
//     const res = {
//       'code': 0,
//       'msg': 'base.request_success',
//       'data': {
//         'banners': [
//           {
//             'curType': 2,
//             'content': '',
//             'cover': 'http://192.168.1.238/largeNature1.jpg'
//           },
//           {
//             'curType': 1,
//             'content': '',
//             'cover': 'http://192.168.1.238/largeNature2.jpg'
//           },
//           {
//             'curType': 3,
//             'content': '',
//             'cover': 'http://192.168.1.238/largeNature3.jpg'
//           }
//         ],
//         'categories': [
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145166278356.jpg',
//             'cateName': '金融投资'
//           },
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145166531377.jpg',
//             'cateName': '金融'
//           },
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145166818330.jpg',
//             'cateName': '文化'
//           },
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145167058938.jpg',
//             'cateName': '服务'
//           },
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145167293061.jpg',
//             'cateName': '教育'
//           },
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145167556373.jpg',
//             'cateName': '通讯'
//           },
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145167742160.jpg',
//             'cateName': '贸易'
//           },
//           {
//             'cateId': 0,
//             'icon': 'http://app.img.maiguoer.com/home/app/industryrcmd/2017/12/29/15145167942248.jpg',
//             'cateName': '司法'
//           }
//         ],
//         'todayRecommends': [
//           {
//             'curType': 1,
//             'content': '',
//             'cover': 'http://192.168.1.238/largeNature2.jpg'
//           },
//           {
//             'curType': 2,
//             'content': '',
//             'cover': 'http://192.168.1.238/largeNature3.jpg'
//           },
//           {
//             'curType': 3,
//             'content': '',
//             'cover': 'http://192.168.1.238/largeNature4.jpg'
//           }
//         ]
//       }
//     }
//     resolve([null, res])
//   })
// }

// 获取首页推荐商品
// get(`http://testshopapi.maiguoer.com/v5.0/home/recommend/goods`, data, msg)
export const getRecommendGoods = (data = {}, msg = '') => get(`v5.0/home/recommend/goods`, data, msg)
// export const getRecommendGoods = (data = {}, msg = '') => {
//   let lastIds = data.lastIds || 0
//   console.log('lastIds:', lastIds)
//   let recommendGoods = []
//   for (let i = 0; i < (4 - lastIds); i++) {
//     recommendGoods.push({
//       'id': i + 1,
//       'goodsId': i + 2,
//       'goodsCover': 'http://192.168.1.238/largeNature' + (i + 1) + '.jpg',
//       'goodsName': '商品' + (1 + i),
//       'goodsPrice': '1000.00',
//       'goodsTags': [
//         '热销',
//         '自营'
//       ]
//     })
//   }
//   console.log('typeof :', typeof lastIds)
//   return new Promise((resolve, reject) => {
//     const res = {
//       'code': 0,
//       'msg': 'base.request_success',
//       'data': {
//         'recommendGoods': recommendGoods,
//         'lastIds': lastIds + 1
//       }
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 2000)
//   })
// }

// 获取商品一级分类
export const getFirstClass = (data = {}, msg = '') => get(`v5.0/home/goods/categories`, data, msg)

// 获取商品二级分类
export const getSubClass = (data = {}, msg = '') => get(`v5.0/home/goods/subcategories`, data, msg)

// 获取商品详情
export const getGoodsDetail = (data = {}, msg = '') => get(`v5.0/store/goods/detail`, data, msg)
// export const getGoodsDetail = (data = {}, msg = '') => {
//   return new Promise((resolve, reject) => {
//     const res = {
//       'code': 0,
//       'msg': 'base.request_success',
//       'data': {
//         'goodsInfo': {
//           'goodsId': 1,
//           'goodsName': '111111',
//           'goodsPrice': '10.00',
//           'description': '',
//           'credit': '0.00',
//           'shareCommission': '0.00',
//           'goodsType': 1,
//           'isSendVip': 0,
//           'isOnSale': 1,
//           'isCollect': 1,
//           'images': [
//             'http://192.168.1.238/largeNature1.jpg'
//           ],
//           'goodsSku': [
//             { 'name': '颜色', 'value': [{ id: 1, desc: '红色' }, { id: 2, desc: '绿色' }, { id: 3, desc: '蓝色' }, { id: 4, desc: '黄色' }] },
//             { 'name': '尺码', 'value': [{ id: 5, desc: 'S' }, { id: 6, desc: 'M' }, { id: 7, desc: 'L' }, { id: 7, desc: 'XL' }] }
//           ],
//           'goodsTags': [
//             '新品',
//             '热销'
//           ],
//           'spendTypes': [
//             {
//               'spendType': 1,
//               'postage': '0.00'
//             },
//             {
//               'spendType': 2,
//               'postage': '10.00'
//             }
//           ],
//           'detailAttach': [
//             '<h3>这是尼玛的商品详情呦</h3>',
//             '<img src="http://192.168.1.238/goodsDetail.jpg" />'
//           ],
//           'disclaimer': [
//             '1.本平台为第三方交易平台及互联网信息服务提供者，平台网站、客户端等所展示的商品/服务的标题、价格、详情等信息内容系由店铺经营者发布，其真实性、准确性和合法性均由店铺经营者负责，本站不提供任何保证，并不承担任何法律责任。',
//             '2.在此提醒用户购买商品/服务前注意谨慎核实。如用户对商品/服务的标题、价格、详情等任何信息有任何疑问的，请与店铺经营者沟通确认；如用户发现店铺内有任何违法/侵权信息，请提供有效线索与平台联系。'
//           ]
//         }
//       }
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 2000)
//   })
// }

// 获取商品评论
export const getGoodsComments = (data = {}, msg = '') => get(`v5.0/store/goods/comment_list`, data, msg)

export const getStoreComments = (data = {}, msg = '') => get(`v5.0/store/goods_comment_list`, data, msg)

export const postPushPhone = (data = {}, msg = '') => post()
// 搜索列表详情
export const searchDetails = (data = {}, msg = '') => get(`v5.0/home/goods/search`, data, msg)
// 获取猜你喜欢列表
export const mayYouLike = (data = {}, msg = '') => get(`v5.0/home/goods/guess`, data, msg)

// 订单列表,status区分请求类型
export const getPendingPay = (data = {}, msg = '') => get(`v5.0/store/order/lists`, data, msg)
// 取消订单原因
export const getCancelOrder = (data = {}, msg = '') => get(`v5.0/store/order/cancel_reason`, data, msg)
// 继续付款
export const continuePay = (data = {}, msg = '') => post(`v5.0/store/order/pay`, data, msg)
// 取消订单
export const cancelTheOrder = (data = {}, msg = '') => post(`v5.0/store/order/cancel_order`, data, msg)
// 取消退款
export const cancelRefund = (data = {}, msg = '') => post(`v5.0/store/order/refund_cancel`, data, msg)
// 退款
export const refund = (data = {}, msg = '') => post(`v5.0/store/order/refund`, data, msg)
// 获取物流公司
export const getLogistics = (data = {}, msg = '') => get(`v5.0/logistics`, data, msg)
// 确认收货
export const confirmReceipt = (data = {}, msg = '') => post(`v5.0/store/order/confirm_receipt`, data, msg)
// 平台申诉
export const platformAppeal = (data = {}, msg = '') => post(`v5.0/store/order/appeal`, data, msg)
// 取消申诉
export const cancelPlatform = (data = {}, msg = '') => post(`v5.0/store/order/cancel_appeal`, data, msg)
// 订单详情请求
export const getOrderDetails = (data = {}, msg = '') => get(`v5.0/store/order/detail`, data, msg)
// 订单消费状态
export const getOrderConsumStatus = (data = {}, msg = '') => get(`v5.0/store/order/store_consume_res`, data, msg)

// 获取小程序分享商品二维码
export const getWxCode = (data = {}, msg = '') => request(`wxa/getwxacodeunlimit`, data, { method: 'post', baseUrl: 'https://api.weixin.qq.com/' })

// 获取我的信息
export const getMyInfo = (data = {}, msg = '') => get(`v5.0/member/home`, data, msg)

// 获取我的余额日志
export const getMyBalance = (data = {}, msg = '') => request(`v5.0/wallet/balance/log_list`, data, { method: 'get', baseUrl: 'http://test-api.maiguoer.com/' })

// 获取我的代金券日志
export const getMyCoupon = (data = {}, msg = '') => request(`v5.0/wallet/voucher/log_list`, data, { method: 'get', baseUrl: 'http://test-api.maiguoer.com/' })

// 我的购物券日志
export const getMyShop = (data = {}, msg = '') => request(`v5.0/wallet/fruit/log_list`, data, { method: 'get', baseUrl: 'http://test-api.maiguoer.com/' })

// 我的收藏
// 店铺
export const getMyShopList = (data = {}, msg = '') => get(`v5.0/member/collect/store`, data, msg)
// 商品
export const getMyGoodsList = (data = {}, msg = '') => get(`v5.0/member/collect/goods`, data, msg)

// 我的大米卡券
export const getMyRiceList = (data = {}, msg = '') => get(`v5.0/member/stamp`, data, msg)

// 我的VIP
export const getMyVip = (data = {}, msg = '') => request(`v5.0/vip/index`, data, { method: 'get', baseUrl: 'http://test-api.maiguoer.com/' })

// 获取购物车信息
export const getShoppingCart = (data = {}, msg = '') => get(`v5.0/store/cart/cart_list`, data, msg)
// export const getShoppingCart = () => {
//   return new Promise(resolve => {
//     const res = {
//       'code': 0,
//       'msg': 'base.request_success',
//       'data': [{
//         shopInfo: {
//           shopName: '我的老店',
//           shopImg: 'http://192.168.1.238/largeNature1.jpg',
//           shopId: 1
//         },
//         goodsInfo: [{
//           invalid: false,
//           goodsName: '测试商品',
//           goodsImg: 'http://192.168.1.238/largeNature1.jpg',
//           goodsSku: ['红色', 'XL'],
//           goodsPrice: '1000.00',
//           goodsNum: 3,
//           goodsId: 1
//         },
//         {
//           invalid: false,
//           goodsName: '测试商品2',
//           goodsImg: 'http://192.168.1.238/largeNature3.jpg',
//           goodsSku: ['绿色', 'L'],
//           goodsPrice: '1000.00',
//           goodsNum: 1,
//           goodsId: 2
//         }]
//       },
//       {
//         shopInfo: {
//           shopName: '你的老店',
//           shopImg: 'http://192.168.1.238/largeNature2.jpg',
//           shopId: 2
//         },
//         goodsInfo: [{
//           invalid: false,
//           goodsName: '假的商品',
//           goodsImg: 'http://192.168.1.238/largeNature2.jpg',
//           goodsSku: ['黄色', 'M'],
//           goodsPrice: '2000.00',
//           goodsNum: 2,
//           goodsId: 3
//         },
//         {
//           invalid: false,
//           goodsName: '假的商品2',
//           goodsImg: 'http://192.168.1.238/largeNature4.jpg',
//           goodsSku: ['蓝色', 'S'],
//           goodsPrice: '4000.00',
//           goodsNum: 2,
//           goodsId: 4
//         }]
//       }]
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 300)
//   })
// }

// 添加商品到购物车
export const addGoods = (data = {}, msg = '') => post(`v5.0/store/cart/add`, data, msg)

// 立即购买
export const buyNow = (data = {}, msg = '') => post(`v5.0/store/goods/by_now`, data, msg)

// 删除购物车商品
export const delGoods = (data = {}, msg = '') => post(`v5.0/store/cart/delete`, data, msg)

// 加减商品
export const changeGoodsNum = (data = {}, msg = '') => post(`v5.0/store/cart/edit_num`, data, msg)

// 收藏商品
export const collectGoods = (data = {}, msg = '') => post(`v5.0/store/goods/collect`, data, msg)

// 选中商品
export const checkGoods = (data = {}, msg = '') => post(`v5.0/store/cart/check`, data, msg)

// 不选中商品
export const unCheckGoods = (data = {}, msg = '') => post(`v5.0/store/cart/uncheck`, data, msg)

// 获取商品总数量
export const getCartCount = (data = {}, msg = '') => get(`v5.0/store/cart/get_count`, data, msg)

// 获取订单预览数据
export const makeOrderInfo = (data = {}, msg = '') => post(`v5.0/store/order/in_order`, data, msg)
// export const makeOrderList = () => {
//   return new Promise(resolve => {
//     const res = {
//       'code': 0,
//       'msg': 'base.request_success',
//       'data': [{
//         shopInfo: {
//           shopName: '我的老店',
//           shopImg: 'http://192.168.1.238/largeNature1.jpg',
//           shopId: 1
//         },
//         goodsInfo: [{
//           goodsName: '测试商品1',
//           goodsImg: 'http://192.168.1.238/largeNature1.jpg',
//           goodsSku: ['红色', 'XL'],
//           goodsPrice: '1000.00',
//           goodsNum: 3,
//           goodsId: 1,
//           delivery: {
//             inStore: true,
//             post: false
//           },
//           postFee: {
//             baseFee: 0,
//             stepFee: 0
//           }
//         },
//         {
//           goodsName: '测试商品2',
//           goodsImg: 'http://192.168.1.238/largeNature3.jpg',
//           goodsSku: ['绿色', 'L'],
//           goodsPrice: '1000.00',
//           goodsNum: 1,
//           goodsId: 2,
//           delivery: {
//             inStore: false,
//             post: true
//           },
//           postFee: {
//             baseFee: 5,
//             stepFee: 1
//           }
//         }]
//       },
//       {
//         shopInfo: {
//           shopName: '你的老店',
//           shopImg: 'http://192.168.1.238/largeNature2.jpg',
//           shopId: 2
//         },
//         goodsInfo: [{
//           goodsName: '假的商品3',
//           goodsImg: 'http://192.168.1.238/largeNature2.jpg',
//           goodsSku: ['黄色', 'M'],
//           goodsPrice: '2000.00',
//           goodsNum: 2,
//           goodsId: 3,
//           delivery: {
//             inStore: true,
//             post: true
//           },
//           postFee: {
//             baseFee: 5,
//             stepFee: 1
//           }
//         },
//         {
//           goodsName: '假的商品4',
//           goodsImg: 'http://192.168.1.238/largeNature4.jpg',
//           goodsSku: ['蓝色', 'S'],
//           goodsPrice: '4000.00',
//           goodsNum: 2,
//           goodsId: 4,
//           delivery: {
//             inStore: true,
//             post: true
//           },
//           postFee: {
//             baseFee: 5,
//             stepFee: 1
//           }
//         }]
//       }]
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 300)
//   })
// }

// 获取地址列表
export const getAddrList = (data = {}, msg = '') => get(`v5.0/store/address/lists`, data, msg)
// export const getAddrList = () => {
//   return new Promise(resolve => {
//     const res = {
//       'code': 0,
//       'msg': 'base.request_success',
//       'data': [{
//         consignee: '你',
//         phone: '13655554452',
//         provinceName: '广东省',
//         cityName: '深圳市',
//         countyName: '龙华区',
//         detailInfo: '1970科技小镇',
//         addressId: 1,
//         isDefault: 1
//       }]
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 300)
//   })
// }

// 新增地址
export const addAddr = (data = {}, msg = '') => post(`v5.0/store/address/add`, data, msg)

// 修改地址
export const editAddr = (data = {}, msg = '') => post(`v5.0/store/address/edit_address`, data, msg)

// 设置默认地址
export const setDefault = (data = {}, msg = '') => post(`v5.0/store/address/default_set`, data, msg)

// 删除地址
export const delAddr = (data = {}, msg = '') => post(`v5.0/store/address/delete`, data, msg)

// 提交订单(生成订单ID)
export const createOrder = (data = {}, msg = '') => post(`v5.0/store/order/submit`, data, msg)

// 立即购买提交订单(生成订单ID)
export const buyNowCreateOrder = (data = {}, msg = '') => post(`v5.0/store/order/by_now_submit`, data, msg)

// export const createOrder = (data = {}, msg = '') => {
//   return new Promise(resolve => {
//     const res = {
//       'code': 0,
//       'msg': '订单创建成功',
//       'data': {
//         'orderId': 53,
//         'orderPrice': 124,
//         'orderSn': '2019032530736',
//         'integral': 1000,
//         'payList': [
//           {
//             'id': 1,
//             'desc': '余额',
//             'isDefault': 0,
//             'remark': '99余额不足'
//           },
//           {
//             'id': 2,
//             'desc': '微信',
//             'isDefault': 1
//           },
//           {
//             'id': 3,
//             'desc': '支付宝',
//             'isDefault': 0
//           }
//         ]
//       }
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 300)
//   })
// }

// 获取支付列表
export const getPayList = (data = {}, msg = '') => post(`v5.0/order/pay_list`, data, msg)
// export const getPayList = (data = {}, msg = '') => {
//   return new Promise(resolve => {
//     const res = {
//       'code': 0,
//       'msg': '订单创建成功',
//       'data': {
//         'orderId': 53,
//         'orderPrice': 124,
//         'orderSn': '2019032530736',
//         'integral': 1000,
//         'payList': [
//           {
//             'id': 1,
//             'desc': '余额',
//             'isDefault': 0,
//             'remark': '99余额不足'
//           },
//           {
//             'id': 2,
//             'desc': '微信',
//             'isDefault': 1
//           },
//           {
//             'id': 3,
//             'desc': '支付宝',
//             'isDefault': 0
//           }
//         ]
//       }
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 300)
//   })
// }

// 支付
export const payOrder = (data = {}, msg = '') => post(`v5.0/store/order/pay_order`, data, msg)

// 获取店铺详情
export const getStoreDetail = (data = {}, msg = '') => get('v5.0/store/detail', data, msg)
// export const getStoreDetail = (data = {}, msg = '') => {
//   return new Promise(resolve => {
//     const res = {
//       'code': 0,
//       'msg': 'base.request_success',
//       'data': {
//         'storeInfo': {
//           'id': 1,
//           'storeName': 'test',
//           'branchName': '11111',
//           'telephone': '13452415241',
//           'location': '广东省深圳市龙岗区',
//           'address': '新一中小区',
//           'storeType': 1,
//           'profile': '本店胜多负少发射点犯得上大师傅但是发射点发生士大夫大师啊实似的士大夫十分建行卡号即可和经济很',
//           'longitude': '100.00000000',
//           'latitude': '100.00000000',
//           'images': [
//             'http://192.168.1.238/largeNature1.jpg',
//             'http://192.168.1.238/largeNature2.jpg',
//             'http://192.168.1.238/largeNature3.jpg',
//             'http://192.168.1.238/largeNature4.jpg'
//           ],
//           'storeScore': '0',
//           'industry': '医药医疗',
//           'isCollect': 1,
//           'isOfficial': 0
//         }
//       }
//     }
//     setTimeout(function () {
//       resolve([null, res])
//     }, 300)
//   })
// }
// 店铺关注与取消关注
export const collectStore = (data = {}, msg = '') => post(`v5.0/store/collect`, data, msg)

// 获取店铺分类
export const getStoreCategory = (data = {}, msg = '') => get('v5.0/store/category', data, msg)

// 获取店铺对应分类商品列表
export const getStoreGoods = (data = {}, msg = '') => get('v5.0/store/goods', data, msg)

// 预支付
// export const prepay = (data = {}, msg = '') => request(`v5.0/pay/wechat_mp/prepay`, data, { method: 'post', baseUrl: 'https://test-api.maiguoer.com/' })
