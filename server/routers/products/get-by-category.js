
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {

  const {
    body
  } = req
  const { category } = body

  try {
    const products = await Product
      .find({ category })
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