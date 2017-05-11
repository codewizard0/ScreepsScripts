module.exports = {
	rules: {
		idle: require('rule.idle.js'),
		runRoles: require('rule.runRoles.js'),
		spawn: require('rule.spawn.js')
	},
	run: function() {
		for (let r in rules) {
			let rule = rules[r];
			
			rule.run();
		}
	}
}