/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtLinkReactSample.view.main.Main', {

    extend: 'Ext.panel.Panel',

    xtype: 'mainview',

    requires: [
        'ExtLinkReactSample.view.sample.Panel',
        'ExtLinkReactSample.view.sample2.Panel',
        'ExtLinkReactSample.view.sample3.Panel',
        'ExtLinkReactSample.view.sample4.Panel'
    ],

    layout: 'border',

    items: [{
        region: 'west',
        xtype: 'panel',
        title: 'サイドナビ',
        width: 350,
        layout: 'fit',
        items: [{
            xtype: 'treelist',
            store: {
                type: 'tree',
                root: {
                    expanded: true,
                    children: [{
                        text: 'サンプル1 (パネルに表示)',
                        menu: 'sample1',
                        leaf: true
                    },{
                        text: 'サンプル2 (グリッドのカラムに埋め込み)',
                        menu: 'sample2',
                        leaf: true
                    },{
                        text: 'サンプル3 (サンプル1と同、cardレイアウトのdefferRender検証)',
                        menu: 'sample3',
                        leaf: true
                    },{
                        text: 'サンプル4 (React-widgets)',
                        menu: 'sample4',
                        leaf: true
                    }]
                }
            },
            listeners: {
                selectionchange: function (c, rec) {
                    var mainView = c.up('mainview'),
                        contents = mainView.down('#contents'),
                        activeItem = contents.getLayout().getActiveItem(),
                        menu = rec.get('menu');

                    if (activeItem.menu !== menu) {
                        var ret = contents.down(menu);
                        if (!Ext.isEmpty(ret)) {
                            contents.setActiveItem(ret);
                            if (menu === 'sample2') {
                                ret.down('grid').getView().refresh();
                            }
                        }
                    }

                }
            }
        }]
    }, {
        region: 'center',
        xtype: 'container',
        itemId: 'contents',
        //layout: 'card',
        layout   : {
            type: 'card',
            deferredRender: true
        },
        items: [{
            xtype: 'sample1',
            menu: 'sample1'
        }, {
            xtype: 'sample2',
            menu: 'sample2'
        }, {
            xtype: 'sample3',
            menu: 'sample3'
        }, {
            xtype: 'sample4',
            menu: 'sample4'
        }]
    }],

    afterRender: function () {
        this.callParent(arguments);

        this.down('treelist').setSelection(this.down('treelist').getStore().getAt(0));
    }

});
