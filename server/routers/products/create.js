
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {
  const {
    body
  } = req

  try {
    const product = await new Product(body).save()

    res.json({
      success: true,
      data: product
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      messege: e
    })
  }
}