describe('MyExtJSApp.view.main.Main', function () {
    var component;

    beforeAll(function (done) {
        setInterval(function () {
            try {
                component = Ext.create && Ext.create('MyExtJSApp.view.main.Main');
            }
            catch (e) {
                console.log(e);
            }

            if (component) {
                clearInterval();
                done();
            }
        }, 1000);
    });

    it('should use controller.main', function () {
        expect(component.controller.alias[0]).toEqual('controller.main');
    });
});

describe('MyExtJSApp.store.Personnel', function () {
    var component;

    beforeAll(function (done) {
        setInterval(function () {
            try {
                component = Ext.create && Ext.create('MyExtJSApp.store.Personnel');
            }
            catch (e) {
                console.log(e);
            }

            if (component) {
                clearInterval();
                done();
            }
        }, 1000);
    });

    it('should use have 3 fields', function () {
        expect(component.config.fields.length).toEqual(3);
    });
});