const withImages = require('next-images')

module.exports = {
  images: {
    disableStaticImages: true
  },
  ...withImages()
}
