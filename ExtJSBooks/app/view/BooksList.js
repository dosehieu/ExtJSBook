Ext.define('ExtJSBookStore.view.BooksList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.bookslist',
    title: 'Books List - (ExtJS C# MVC - Viet Hieu - Thanh Cong)',
    store: 'Books',
    initComponent: function () {
        this.tbar = [{
            text: 'Add Book',
            action: 'add',
            iconCls: 'book-add'
        }];
        this.columns = [
            { header: 'Title', dataIndex: 'title', flex: 1 },
            { header: 'Author', dataIndex: 'author' },
            { header: 'Price', dataIndex: 'price', width: 60 },
            { header: 'Quantity', dataIndex: 'qty', width: 80 },
            {
                header: 'Action', width: 50,
                renderer: function (v, m, r) {
                    var id = Ext.id();
                    Ext.defer(function () {
                        Ext.widget('image', {
                            renderTo: id,
                            name: 'delete',
                            src: '/Content/images/delete.png',
                            width: 18,
                            height: 18,
                            listeners: {
                                afterrender: function (me) {
                                    me.getEl().on('click', function () {
                                        var grid = Ext.ComponentQuery.query('bookslist')[0];
                                        if (grid) {
                                            var sm = grid.getSelectionModel();
                                            var rs = sm.getSelection();
                                            if (!rs.length) {
                                                Ext.Msg.alert('Info', 'No Book Selected');
                                                return;
                                            }
                                            Ext.Msg.confirm('Remove Book',
                                            'Are you sure you want to delete?',
                                            function (button) {
                                                if (button == 'yes') {
                                                    var book = rs[0].getData();
                                                    var id = book.id;
                                                    Ext.Ajax.request({
                                                        url: 'http://localhost:55454/Books/DeleteBook',
                                                        method: 'POST',
                                                        jsonData: { 'id': id },
                                                        success: function (response) {
                                                            var grid = Ext.ComponentQuery.query('bookslist')[0];
                                                            grid.getStore().load();
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            }
                        });
                    }, 50);
                    return Ext.String.format('<div id="{0}"></div>', id);
                }
            }
        ];
        this.callParent(arguments);
    }
});