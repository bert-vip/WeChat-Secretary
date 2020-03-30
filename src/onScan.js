/*
 * @Author: C
 * @Date: 2020-03-18 16:26:41
 * @LastEditors: C
 * @LastEditTime: 2020-03-18 16:26:42
 * @Description: 机器人需要扫描二维码时监听
 */
const Qrterminal = require("qrcode-terminal")

module.exports = function onScan(qrcode, status) {
  Qrterminal.generate(qrcode, { small: true })
}
