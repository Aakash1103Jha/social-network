const { connect } = require("mongoose")

module.exports = () => {
	try {
		connect(process.env.URI, () => console.info(`MongoDB Atlas connected!`))
	} catch (err) {
		console.error(`MongoDB error: ${err}`)
	}
}
