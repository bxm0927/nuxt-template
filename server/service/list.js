const axios = require('axios')

const search = async (req, res, next) => {
  // TODO: 封装 axios
  // TODO: try catch
  const params = req.query
  const api = 'http://imoocnote.calfnote.com/inter/getClasses.php'
  const { status, data } = await axios.get(api, { params })

  if (status === 200 && data) {
    return res.send(data.data)
  } else {
    console.log('someing error: ', data.msg)
    // TODO: cat logger
  }

  next()
}

module.exports = {
  search,
}
