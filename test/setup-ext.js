Ext.Loader.setConfig({
    enabled: true,
    disableCaching: false
});

Ext.Loader.setPath({
    'Ext': 'ext',
    'MyExtJSApp': 'app'
});

Ext.application({ 
    name: 'MyExtJSApp',

    extend: 'MyExtJSApp.Application',

    requires: [
        'MyExtJSApp.view.main.Main'
    ],

    mainView: 'MyExtJSApp.view.main.Main'
});

Ext.require('Ext.data.Model');

afterEach(function () {
    Ext.data.Model.cache = {};
});
