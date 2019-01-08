/**
 * This view is an example list of people.
 */
Ext.define('ExtLinkReactSample.view.sample3.Panel', {

    extend: 'Ext.panel.Panel',

    xtype: 'sample3',

    title: 'sample3',

    html: [
        //'<div id="like_button_container"></div>'
        '<p>',
        '<div class="like_button_container" data-commentid="1"></div>',
        '</p>',
        '<p>',
        'This is the second comment.',
        '<div class="like_button_container" data-commentid="2"></div>',
        '</p>',
        '<p>',
        'This is the third comment.',
        '<div class="like_button_container" data-commentid="3"></div>',
        '</p>'
    ],

    afterRender: function () {
        this.callParent(arguments);

        var likeButton = Ext.require('ExtLinkReactSample.mixin.LikeButton2');

    }


});
