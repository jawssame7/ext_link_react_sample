/**
 * This view is an example list of people.
 */
Ext.define('ExtLinkReactSample.view.sample4.Panel', {

    extend: 'Ext.panel.Panel',

    xtype: 'sample4',

    title: 'sample4',

    html: [
        '<div id="app-root"></div>'
    ],

    afterRender: function () {
        var me = this;
        me.callParent(arguments);

        var DropdownList = ReactWidgets.DropdownList;
console.log(DropdownList, ReactWidgets)

        // ReactElement作成クラス
        var e = React.createElement;

        // ReactElement作成クラスで、DropdownListをelement化してレンダリング
        ReactDOM.render(e(DropdownList), document.getElementById('app-root'));
    }

});
