var roles = require('roles');
var rules = require('rules');
var tasks = require('tasks');

module.exports.loop = function() {
	rules.run();
	roles.run();
	tasks.run();
}