
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {
  try {
    const categories = await Product
      .find({})
      .select('category')
      .lean()
    const uniqueCategories = categories.map(c => c.category)

    res.json({
      success: true,
      data: [...new Set(uniqueCategories)]
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      messege: e
    })
  }
}