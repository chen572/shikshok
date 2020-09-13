
const {
  Store
} = require('../../models')

module.exports = async (req, res) => {
  const {
    body
  } = req

  try {
    const store = await new Store(body).save()

    res.json({
      success: true,
      data: store
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      messege: e
    })
  }
}