/**
 * This view is an example list of people.
 */
Ext.define('ExtLinkReactSample.view.sample2.Panel', {

    extend: 'Ext.panel.Panel',

    xtype: 'sample2',

    requires: [
        'ExtLinkReactSample.store.Personnel'
    ],

    items: [{
        xtype: 'panel',
        title: 'sample2',
        height: 100
    },{
        xtype: 'grid',
        store: {
            type: 'personnel'
        },
        columns: [{
            text: 'Name',
            dataIndex: 'name'
        },{
            text: 'Email',
            dataIndex: 'email',
            flex: 1
        },{
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1
        },{
            text: 'Like',
            xtype: 'templatecolumn',
            dataIndex: 'id',
            tpl: Ext.create('Ext.XTemplate',
                '<div class="like_button_container" data-commentid=""></div>'
            )
        }],
        viewConfig: {
            listeners: {
                refresh: function (view) {
                    Ext.each(view.getNodes(), function (node) {
                        var rec = view.getRecord(node),
                            cont = Ext.fly(node).down('.like_button_container');
                        console.log(cont)

                        if (!Ext.isEmpty(cont)) {
                            cont.set({
                                'data-commentid': rec.getId()
                            });
                        }
                    });

                    var likeButton = Ext.require('ExtLinkReactSample.mixin.LikeButton2');
                }
            }
        }

    }],



});
