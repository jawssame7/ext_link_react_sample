/**
 * This view is an example list of people.
 */
Ext.define('ExtLinkReactSample.view.sample5.Panel', {

    extend: 'Ext.panel.Panel',

    xtype: 'sample5',

    bodyPadding: '30',

    title: 'sample5 (React-widgets Combo)',

    html: [
        '<div id="app-combo"></div>',
        '<div style="height: 50px;">disable </div>',
        '<div id="app-combo2"></div>',
        '<div style="height: 50px;">value disable</div>',
        '<div id="app-combo3"></div>',
        '<div style="height: 50px;">onChange</div>',
        '<div id="app-combo4"></div>',
        '<div style="height: 50px;">open</div>',
        '<div id="app-combo5"></div>'
    ],

    afterRender: function () {
        var me = this;
        me.callParent(arguments);

        var combo = ReactWidgets.Combobox;

        // ReactElement作成クラス
        var e = React.createElement;

        var data = ['orange', 'red', 'blue', 'purple'];

        // ReactElement作成クラスで、comboをelement化してレンダリング
        ReactDOM.render(
            e(combo, {
                data: data,
                //disabled: true
            }),
            document.getElementById('app-combo')
        );


        // disable
        ReactDOM.render(
            e(combo, {
                data: data,
                disabled: true,
                defaultValue: 'orange'
            }),
            document.getElementById('app-combo2')
        );

        // disable value
        ReactDOM.render(
            e(combo, {
                data: data,
                defaultValue: ['orange'],
                disabled: ["red", "purple"]
            }),
            document.getElementById('app-combo3')
        );

        // onChange
        ReactDOM.render(
            e(combo, {
                data: data,
                defaultValue: ['orange'],
                onChange: function (value) {
                    alert(value + " is selected");
                }
            }),
            document.getElementById('app-combo4')
        );

        // open
        ReactDOM.render(
            e(combo, {
                data: data,
                defaultValue: ['orange'],
                onChange: function (value) {
                    alert(value + " is selected");
                }
            }),
            document.getElementById('app-combo4')
        );
    }

});
