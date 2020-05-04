/*
 * Node.js logger
 * @See https://github.com/winstonjs/winston
 * @Author: xiaoming.bai
 * @Date: 2020-05-01 11:13:00
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 13:06:47
 */

/**
 * Usage:
 * - `const { Logger } = global.app
 * - `Logger.info('Hello distributed logs')`
 * - `Logger.warn('Hello again distributed logs')`
 * - `Logger.error('there's no place like home')`
 */

const { createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf, colorize } = format
require('winston-daily-rotate-file')
const config = require('../../config')

// format logger
const niceFormat = printf(({ level, message, timestamp }) => {
  return `[${level}] ${timestamp} ${message}`
})

// combine formats
const combineFormats = combine(
  label({ label: 'server' }),
  timestamp({ format: 'HH:mm:ss' }),
  niceFormat,
)

// winston transports
const trans = []
const defaultRotateOptions = {
  level: 'info',
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
}

// logs to console & rotating file
if (config.logger.console) {
  const options = { format: combine(colorize({ all: true })), ...config.logger.console }
  trans.push(new transports.Console(options))
}
if (config.logger.infoFile) {
  const options = { ...defaultRotateOptions, ...config.logger.infoFile }
  trans.push(new transports.DailyRotateFile(options))
}
if (config.logger.errorFile) {
  const options = { ...defaultRotateOptions, ...config.logger.errorFile }
  trans.push(new transports.DailyRotateFile(options))
}

const LoggerOptions = {
  transports: trans,
  format: combineFormats,
  colorize: true,
  exitOnError: false,
}

const Logger = createLogger(LoggerOptions)

module.exports = Logger
