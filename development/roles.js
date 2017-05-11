module.exports = {
	roles: {
		idle: require('role.idle')
	},
	run: function() {
		for (let r in roles) {
			letrole = roles[r];
		}
	}
}