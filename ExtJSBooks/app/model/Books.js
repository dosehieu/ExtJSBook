Ext.define('ExtJSBookStore.model.Books', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'title', type: 'string' },
        { name: 'author', type: 'string' },
        { name: 'price', type: 'int' },
        { name: 'qty', type: 'int' }
    ]
});