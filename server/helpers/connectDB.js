const { connect } = require("mongoose")

module.exports = () => {
	try {
		connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
			console.info(`MongoDB Atlas connected!`),
		)
	} catch (err) {
		console.error(`MongoDB error: ${err}`)
	}
}
