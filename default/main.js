var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var creepCreation = require('creepCreation');
var cleanup = require('cleanup');

module.exports.loop = function() {
    for (let name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory['role'] == 'Harvester') {
            roleHarvester.run(creep);
        } else if (creep.memory['role'] == 'Upgrader') {
            roleUpgrader.run(creep);
        } else if (creep.memory['role'] == 'Builder') {
            roleBuilder.run(creep);
        }
    }
    
    creepCreation.run();
    cleanup.run();
}