const multer = require("multer")
const fs = require("fs")

const fileTypes = ["image/jpg", "image/jpeg", "image/png"]

const imageStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		const path = "./server/temp"
		fs.mkdirSync(path, { recursive: true })
		cb(null, path)
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname)
	},
})

const imageFilter = (req, file, cb) => {
	if (fileTypes.includes(file.mimetype)) {
		cb(null, true)
	} else {
		cb(null, false)
	}
}

const uploadImage = multer({ storage: imageStorage, fileFilter: imageFilter })

module.exports = {
	uploadImage,
}
