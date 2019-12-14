
debugger;

Ext.onReady(function () {
    Ext.Loader.setConfig({
        enabled: true
       
    });
    Ext.application({
        name: 'ExtJSBookStore',
        appFolder: '../../app',
        controllers: ['Books'],
        launch: function () {
            Ext.widget('bookslist', {
                width: 500,
                height: 300,
                renderTo: 'output'
            });
        }
    });
});
