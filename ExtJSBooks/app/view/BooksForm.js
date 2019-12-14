Ext.define('ExtJSBookStore.view.BooksForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.booksform',
    title: 'Add Book',
    width: 350,
    layout: 'fit',
    resizable: false,
    closeAction: 'hide',
    modal: true,
    config: {
        recordIndex: 0,
        action: ''
    },
    items: [{
        xtype: 'form',
        layout: 'anchor',
        bodyStyle: {
            background: 'none',
            padding: '10px',
            border: '0'
        },
        defaults: {
            xtype: 'textfield',
            anchor: '100%'
        },
        items: [{
            name: 'title',
            fieldLabel: 'Book Title'
        }, {
            name: 'author',
            fieldLabel: 'Author Name'
        }, {
            name: 'price',
            fieldLabel: 'Price'
        }, {
            name: 'qty',
            fieldLabel: 'Quantity'
        }]
    }],
    buttons: [{
        text: 'OK',
        action: 'add'
    }, {
        text: 'Reset',
        handler: function () {
            this.up('window').down('form').getForm().reset();
        }
    }, {
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        }
    }]
});