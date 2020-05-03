/*
 * Node.js 计时器
 * Usage:
 *   const timer = new Timer()
 *   timer.start('getApi')
 *   const duration = timer.stop('getApi')
 *
 * @See: http://nodejs.cn/api/process.html#process_process_hrtime_time
 * @Author: xiaoming.bai
 * @Date: 2020-05-03 00:10:35
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-03 01:41:22
 */

/**
 * 格式化 `process.hrtime()` 返回的时间
 * @param {number} seconds 秒
 * @param {number} nanoseconds 纳秒
 * @return {number} 毫秒数
 */
function formatTimer([seconds, nanoseconds]) {
  const NS_PER_SEC = 1e9
  return Math.round((seconds * NS_PER_SEC + nanoseconds) / 10000) / 100
}

class Timer {
  constructor() {
    this.timer = {}
  }

  /**
   * 开始计时
   * @param {String} label 计时器标签
   */
  start(label = 'Timer') {
    this.timer[label] = process.hrtime()
  }

  /**
   * 停止计时
   * @param {String} label 计时器标签
   * @return {String} 毫秒时间
   */
  stop(label = 'Timer') {
    const timeLabel = this.timer[label]
    if (!timeLabel) return

    const duration = process.hrtime(timeLabel)
    return formatTimer(duration) + 'ms'
  }
}

module.exports = Timer
