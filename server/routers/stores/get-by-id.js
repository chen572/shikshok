
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
      .populate({
        path: 'store'
      },
        '_id name'
      )

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