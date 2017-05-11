var roleTransfer = require('role.transfer');

module.exports = {
    run: function(creep) {
    	var building = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);
    	
    	roleTransfer.run(creep, building);
    }
};