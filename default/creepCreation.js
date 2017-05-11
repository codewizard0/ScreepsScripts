module.exports = {
	run : function() {
		var name = undefined;
		var minimumNumberOfHarvesters = 10;
		var numberOfHarvesters = _.sum(Game.creeps, ((c) => c.memory.role == 'Harvester'));
		var minimumNumberOfUpgraders = 10;
		var numberOfUpgraders = _.sum(Game.creeps, ((c) => c.memory.role == 'Upgrader'));
		var minimumNumberOfBuilders = 10;
		var numberOfBuilders = _.sum(Game.creeps, ((c) => c.memory.role == 'Builder'));
		
		if (numberOfHarvesters < minimumNumberOfHarvesters) {
			console.log("Spawning new Harvester");
			name = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Harvester', working: false});
		} else if (numberOfBuilders < minimumNumberOfBuilders) {
			console.log("Spawning new Builder");
			name = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Builder', working: false});
		} else {
			console.log("Spawning new Upgrader");
			name = Game.spawns['Spawn1'].createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'Upgrader', working: false});
		}
		
		if (!(name < 0)) {
			console.log("Spawned new " + Game.creeps[name].memory.role);
		}
	}
}