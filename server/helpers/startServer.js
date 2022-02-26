const PORT = process.env.PORT || 4000
/**
 * This function accepts an app parameter
 * of type Express and creates an express server
 * @param {Express} app
 */
module.exports = (app) => {
	try {
		app.listen(PORT, () => console.info(`Server running on port ${PORT}`))
	} catch (err) {
		console.error(`Server error: ${err}`)
	}
}
