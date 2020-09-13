
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {
  try {
    const products = await Product
      .find({})
      .lean()
      .populate({
        path: 'store'
      },
        '_id name'
      )

    res.json({
      success: true,
      data: products
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      message: e
    })
  }
}