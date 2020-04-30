const axios = require('axios')

const search = async (req, res, next) => {
  const params = req.query
  const { status, data } = await axios.get('http://imoocnote.calfnote.com/inter/getClasses.php', {
    params,
  })

  if (status === 200 && data) {
    return res.send(data.data)
  }

  next()
}

module.exports = {
  search,
}
