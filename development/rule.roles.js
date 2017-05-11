let base = require('rule.base')

module.exports = {
	rule : {

	},
	run : function() {
		base.run();
		
		for (let c in Game.creeps) {
			letcreep = Game.creeps[c];
			for (let r in creep.memory.roles) {
				letrole = creep.memory.roles[r];
				role.run(creep);
			}
		}
	}
}