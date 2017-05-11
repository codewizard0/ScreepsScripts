module.exports = {
    run: function(creep, states) { 	
    	var currentState = states[creep.memory['state']];
    	
    	if (currentState['transition'](creep) == true) {
    		creep.memory['state'] = currentState['transitionState'](creep);
    	} else {
    		currentState['action'](creep);
    	}
    }
}