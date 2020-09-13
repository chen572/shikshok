
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {
  const {
    body
  } = req
  const { id } = body

  try {
    const store = await Product
      .find({ store: id })
      .lean()
      .populate('store')

    res.json({
      success: true,
      data: store
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      messege: e
    })
  }
}