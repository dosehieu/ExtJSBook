Ext.define('ExtJSBookStore.store.Books', {
    extend: 'Ext.data.Store',
    storeId: 'bookStore',
    model: 'ExtJSBookStore.model.Books',
    fields: ['id', 'title', 'author', 'price', 'qty'],
    proxy: {
        type: 'ajax',
        url: 'http://localhost:55454/Books/GetBook',
        reader: {
            type: 'json',
            root: 'books'
        }
    },
    autoLoad: true
});
63804