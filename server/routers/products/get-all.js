
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {
  try {
    const products = await Product
      .find({})
      .lean()
      .populate('store')

    res.json({
      success: true,
      data: products
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: e
    })
  }
}