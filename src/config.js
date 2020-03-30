/*
 * @Author: C
 * @Date: 2020-03-18 16:13:15
 * @LastEditors: C
 * @LastEditTime: 2020-03-20 14:14:53
 * @Description: 配置项
 */

module.exports = {
  // puppet_padplus Token
  token: "你的ipadToken",
  // 机器人名字
  name: "可随便",
  // 房间/群聊
  room: {
    // 管理群组列表
    roomList: {
      // 群名(用于展示，最好是群名，可随意) : 群id(这个可不能随意)
      恭喜: "",
      发财: ""
    },
    // 加入房间回复
    roomJoinReply: `\n 你好，欢迎你的加入，请自觉遵守群规则，文明交流`
  },
  // 私人
  personal: {
    // 好友验证自动通过关键字
    addFriendKeywords: ["我最帅", "哈哈哈"],
    // 是否开启加群
    addRoom: true
  }
}
