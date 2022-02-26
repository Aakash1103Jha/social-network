/**
 * This function accepts email as parameter,
 * matches email with regex and returns true for valid,
 * and false for invalid email.
 * @param {string} email
 * @returns {Boolean} isValidEmail flag
 */
module.exports = (email) => {
	if (!email || email.length === 0) return false
	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) return false
	return true
}
