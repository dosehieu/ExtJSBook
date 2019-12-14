Ext.define('ExtJSBookStore.controller.Books', {
    extend: 'Ext.app.Controller',
    stores: ['Books'],
    views: ['BooksList', 'BooksForm'],
    refs: [{
        ref: 'formWindow',
        xtype: 'booksform',
        selector: 'booksform',
        autoCreate: true
    }],
    init: function () {
        this.control({
            'bookslist > toolbar > button[action=add]': {
                click: this.showAddForm
            },
            'bookslist': {
                itemdblclick: this.onRowdblclick
            },
            'booksform button[action=add]': {
                click: this.doAddBook
            }
        });
    },
    onRowdblclick: function (me, record, item, index) {
        var win = this.getFormWindow();
        win.setTitle('Edit Book');
        win.setAction('edit');
        win.setRecordIndex(index);
        win.down('form').getForm().setValues(record.getData());
        win.show();
    },
    showAddForm: function () {
        var win = this.getFormWindow();
        win.setTitle('Add Book');
        win.setAction('add');
        win.down('form').getForm().reset();
        win.show();
    },


    doAddBook: function () {
        var win = this.getFormWindow();
        var store = this.getBooksStore();
        var values = win.down('form').getValues();
        var action = win.getAction();
        //   var book = Ext.create('ExtJSBookStore.model.Book', values);
        debugger
        var grid = Ext.ComponentQuery.query('bookslist')[0];
        var id = 0;
        if (grid) {
            var sm = grid.getSelectionModel();
            var rs = sm.getSelection();
            if (rs.length) {
                var book = rs[0].getData();
                id = book.id;
            }
        }else
            var url = '';
        if (action == 'edit') {
            url = 'http://localhost:55454/Books/EditBook?id=' + id;
        }
        else {
            url = 'http://localhost:55454/Books/AddBook';
        }
        Ext.Ajax.request({
            url: url,
            method: 'POST',
            jsonData: values,
            success: function (response) {
                var grid = Ext.ComponentQuery.query('bookslist')[0];
                grid.getStore().load();
            }
        });
        win.close();
    }
});