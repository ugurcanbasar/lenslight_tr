import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    try {
        const photo = await Photo.create(req.body)
        res.status(201).json({
            succeed: true,
            photo
        })
        console.log('resim eklendi')
    } catch (error) {
        res.status(500).json({
            succeed: false,
            error,
        })
    }

}

const getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find({})
        res.status(200).render("photos", {
            photos,
            link: "photos"
        })
        console.log('process ok')
    } catch (error) {
        res.status(500).json({
            succeed: false,
            error,
        })
    }
}

const getAPhoto = async (req, res) => {
    try {
        const photo = await Photo.findById({ _id: req.params.id })
        res.status(200).render("photo", {
            photo,
            link: "photos"
        })
    } catch (error) {
        res.status(500).json({
            succeed: false,
            error,
        })
    }
}

export { createPhoto, getAllPhotos, getAPhoto }