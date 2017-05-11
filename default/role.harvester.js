var roleTransfer = require('role.transfer');

module.exports = {
    run: function(creep) {
        let spawn = Game.spawns['Spawn1'];
        
        roleTransfer.run(creep, spawn);
    }
};