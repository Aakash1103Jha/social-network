module.exports = (email) => {
	if (!email || email.length === 0) return false
	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) return false
	return true
}
