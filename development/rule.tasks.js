let base = require('rule.base')

module.exports = {
	rule : {

	},
	run : function() {
		base.run();

		for ( let c in Game.creeps) {
			let creep = Game.creeps[c];
			for ( let t in creep.memory.tasks) {
				let task = creep.memory.tasks[t];
				task.run(creep);
			}
		}
	}
}