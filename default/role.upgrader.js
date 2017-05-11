var roleTransfer = require('role.transfer');

module.exports = {
    run: function(creep) {
        let controller = creep.room.controller;

        roleTransfer.run(creep, controller);
    }
};