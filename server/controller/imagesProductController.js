const { ImagesProduct, ImagesProductColor } = require('../models/models')
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/apierror');

class ImagesProductController {
    async createColor(req, res) {
        const { color } = req.body
        const { id } = req.params
        console.log('id', id, 'color', color)

        const imagesProductColor = await ImagesProductColor.create({ color: color, productId: id })

        return res.json(imagesProductColor)
    }

    async craeteImages(req, res) {
        const { color, productId } = req.body
        const { img } = req.files

        const fileName = uuid.v4() + '.jpg'
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const imagesProductColor = await ImagesProductColor.findOne({ where: { color: color, productId: productId } })

        const imageProduct = await ImagesProduct.create({ img: fileName, imagesProductColorId: imagesProductColor.id })

        return res.json(imageProduct)
    }

    async getColor(req, res) {
        const { id } = req.params

        const color = await ImagesProductColor.findAll({ where: { productId: id } })

        return res.json(color)
    }

    async getImagesProduct(req, res, next) {
        const { id } = req.params

        const images = await ImagesProduct.findAll({ where: { imagesProductColorId: id } })

        return res.json(images)
    }

};

const imagesProductController = new ImagesProductController();

module.exports = imagesProductController;