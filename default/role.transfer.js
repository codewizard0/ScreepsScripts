module.exports = {
    run: function(creep, target) {    	
        if (creep.memory['working'] == true && creep.carry.energy <= 0) {
            creep.memory['working'] = false;
        } else if (creep.memory['working'] == false && creep.carry.energy >= creep.carryCapacity) {
            creep.memory['working'] = true;
        }
    
        if (creep.memory['working'] == true) {
            if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        } else {
            let source = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(source) == ERR_NOT_IN_RANGE) {
                creep.moveTo(source);
            }
        }   
    }
}