'use strict';

//const e = React.createElement;

let { DropdownList } = ReactWidgets;
let colors = ['orange', 'red', 'blue', 'purple'];

class Example extends React.Component {
    render() {
        let { open } = this.state || {};
        let toggleWidget = () => this.setState({ open: !open });

        let html = '<div>,<button onClick=toggleWidget></button></div>'

        return e(html
        );

    //     return (
    //         <div>
    //         <button onClick={toggleWidget}>
    //         {open ? 'close' : 'open'}
    //         </button>
    //         <DropdownList
    //     open={open}
    //     data={colors}
    //     onToggle={()=>{}}
    //     />
    //     </div>
    // )


    }

    // render() {
    //     if (this.state.liked) {
    //         return 'You liked comment number ' + this.props.commentID;
    //     }
    //
    //     return e(
    //         'button',
    //         { onClick: () => this.setState({ liked: true }) },
    //         'Like'
    //     );
    // }
};