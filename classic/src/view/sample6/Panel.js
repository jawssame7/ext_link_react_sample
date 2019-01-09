/**
 * This view is an example list of people.
 */
Ext.define('ExtLinkReactSample.view.sample6.Panel', {

    extend: 'Ext.panel.Panel',

    xtype: 'sample6',

    title: 'sample6',

    bodyPadding: '30',

    isOpen: false,

    state: 'close',

    html: [
        '<div>',
        '  <button class="open-btn">open</button>',
        '  <div id="open-combo"></div>',
        '</div>'
    ],

    afterRender: function () {
        var me = this;
        me.callParent(arguments);

        var el = me.getEl(),
            button = el.down('.open-btn');

        button.on('click', function () {
            me.isOpen = !me.isOpen;
            me.state = me.isOpen ? 'open' : 'close';
        });


        var DropdownList = ReactWidgets.DropdownList;

        var colors = ['orange', 'red', 'blue', 'purple'];

        // ReactElement作成クラス
        var e = React.createElement;

        // ReactElement作成クラスで、DropdownListをelement化してレンダリング
        var instance;
        ReactDOM.render(
            e(DropdownList, {
                data: colors,
                ref: 'button'
            }),
            document.getElementById('open-combo')
        );

        console.log(instance)

        // aa.inner.componentDidMount = function () {
        //     console.log('aaaa')
        //
        // };
        // aa.inner.props.open = true;
        //
        // aa.inner.setState({open: true});
        // console.log(aa)
        // aa.toggle();
        //
        // var openDropDownList = Ext.require('ExtLinkReactSample.mixin.OpenDropDownList');
        // console.log(openDropDownList)
    }

});
