
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {

  const {
    params
  } = req
  const { category } = params

  try {
    const products = await Product
      .find({ category })
      .lean()
      .populate({
        path: 'store',
        options: { lean: true }
      },
        'name'
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