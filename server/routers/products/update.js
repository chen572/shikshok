
const {
  Product
} = require('../../models')

module.exports = async (req, res) => {

  const {
    body
  } = req
  const { id, key, value } = body

  try {
    const updatedProp = await Product
      .findByIdAndUpdate(
        id,
        { [key]: value },
        { new: true, select: `${key}`, lean: true }
      )
      .lean()
    
    res.json({
      success: true,
      data: updatedProp
    })
  } catch (e) {
    console.log(e)
    res.status(500).json({
      success: false,
      message: e
    })
  }
}