
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {
  const {
    query
  } = req
  const { page } = query

  try {
    const products = await Product
      .find({})
      .skip((page - 1) * 3)
      .limit(3)
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