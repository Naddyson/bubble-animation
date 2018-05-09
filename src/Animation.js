import React from 'react'
import BubbleAnimated from "./AnimatedItems/BubbleAnimated";

class Animation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            from: this.props.from.getBoundingClientRect(),
            to: this.props.to.getBoundingClientRect()
        }
        this.handleAdd = this.handleAdd.bind(this)
    }
    check = () => {
        console.log(this.state.items.length)
    }

    handleAdd() {
        const newItems = this.state.items.concat(
            {
                size: '30px',
                color: 'cyan',
                num: 1,
                from: this.state.from,
                to: this.state.to,
                translateEnd: false
            }

        );
        this.setState({items: newItems});
    }

    handleRemove(i) {
        let newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }
    render() {
        const items = this.state.items.map((item, i) =>
                <BubbleAnimated
                    size={item.size}
                    color={item.color}
                    num={item.num}
                    from={item.from}
                    to={item.to}

                    handleTransitionEnd={ () => this.handleRemove(i) }
                >
                </BubbleAnimated>
        )

        return (
            <div>
                {items}
                <div>
                    <button onClick={this.handleAdd}>Animation! </button>
                    <button onClick={this.check}>check! </button>
                </div>

            </div>
        )
    }
}


export default Animation;