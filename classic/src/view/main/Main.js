/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtLinkReactSample.view.main.Main', {

    extend: 'Ext.panel.Panel',

    // mixins: [
    //     'Ext.mixin.Mashup'
    // ],

    // requiredScripts: [
    //     'react/like_button.js'
    // ],

    // requires: [
    //     'ExtLinkReactSample.mixin.LikeButton'
    // ],

    html: [
        '<div>hoge</div>',
        '<div id="like_button_container"></div>'
    ],

    afterRender: function () {
        this.callParent(arguments);

        var likeButton = Ext.require('ExtLinkReactSample.mixin.LikeButton');

    }

});
