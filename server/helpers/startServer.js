const PORT = process.env.PORT || 4000

module.exports = (app) => {
	try {
		app.listen(PORT, () => console.info(`Server running on port ${PORT}`))
	} catch (err) {
		console.error(`Server error: ${err}`)
	}
}
