module.exports = (email) => {
	if (!email) return false
	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) return false
	return true
}
