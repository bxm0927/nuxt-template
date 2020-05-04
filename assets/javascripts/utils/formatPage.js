/*
 * 构造分页数据
 * @Author: xiaoming.bai
 * @Date: 2019-03-28 23:20:53
 * @Last Modified by: xiaoming.bai
 * @Last Modified time: 2020-05-04 16:12:23
 */

// 数据结构：
// {
//   index: 1, // 序号
//   text: "1", // 文案
//   cur: true, // 是否是当前页
//   clickable: false // 是否可点击
// }

// 示例：
// [
//   { index: 8, text: "上一页", clickable: true },
//   { index: 1, text: 1, clickable: true },
//   { text: "..." },
//   { index: 7, text: 7, clickable: true },
//   { index: 8, text: 8, clickable: true },
//   { index: 9, text: 9, clickable: false, cur: true },
//   { index: 10, text: 10, clickable: true },
//   { index: 11, text: 11, clickable: true },
//   { text: "..." },
//   { index: 95, text: 95, clickable: true },
//   { index: 10, text: "下一页", clickable: true },
// ]

/**
 * 构造分页数据
 * @param {number} pageIndex 当前页码
 * @param {number} pageCount 总页数
 */
const formatPage = (pageIndex, pageCount) => {
  const pageArr = []

  // 处理到上一页的逻辑
  pageArr.push({
    index: pageIndex - 1,
    text: '上一页',
    clickable: pageIndex !== 1, // 只要当前不在第一页，那么到上一页就可以点击
  })

  // 处理当前页之前页码的逻辑
  if (pageIndex <= 5) {
    for (let i = 1; i < pageIndex; i++) {
      pageArr.push({ index: i, text: i, clickable: true })
    }
  } else {
    pageArr.push({ index: 1, text: 1, clickable: true })
    pageArr.push({ text: '...' })

    for (let i = pageIndex - 2; i < pageIndex; i++) {
      pageArr.push({ index: i, text: i, clickable: true })
    }
  }

  // 处理当前页的逻辑
  pageArr.push({
    index: pageIndex,
    text: pageIndex,
    clickable: false, // 当前页不可点击
    cur: true,
  })

  // 处理当前页之后页码的逻辑
  if (pageIndex >= pageCount - 4) {
    for (let i = pageIndex + 1; i <= pageCount; i++) {
      pageArr.push({ index: i, text: i, clickable: true })
    }
  } else {
    for (let i = pageIndex + 1; i <= pageIndex + 2; i++) {
      pageArr.push({ index: i, text: i, clickable: true })
    }

    pageArr.push({ text: '...' })
    pageArr.push({ index: pageCount, text: pageCount, clickable: true })
  }

  // 处理到下一页的逻辑
  pageArr.push({
    index: pageIndex + 1,
    text: '下一页',
    clickable: pageIndex !== pageCount, // 只要当前不在最后一页，那么到下一页就可以点击
  })

  return pageArr
}

export default formatPage
