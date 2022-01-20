const {Service} = require('verificac19-sdk');
const syncdata = async () => {

    await Service.updateAll();
};

module.exports = syncdata;