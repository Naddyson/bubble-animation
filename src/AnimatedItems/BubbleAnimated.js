import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import SplashAnimated from "./SplashAnimated";

class BubbleAnimated extends Component {
    transitionEnd = () => {
        console.log('splash end')
    }
    render() {
        console.log('render')
        let { size, color, from, to, num} = this.props;
        return (
            <Motion
                defaultStyle={{x: from.x, y: from.y}}
                style={{x: spring(to.x), y: spring(to.y)}}
            >
                {({x, y}) => {
                    if(x===to.x && y===to.y) {

                        return(<SplashAnimated size={size} color={color} target={to} handleTransitionEnd={this.transitionEnd}/>)
                    }
                    else
                    return(
                        <div style={{
                            width: size,
                            height: size,
                            background: color,
                            transform: `translate3d(${x}px, ${y}px, 0`,
                            WebkitTransform: `translate3d(${x}px, ${y}px, 0`,
                            borderRadius: '50%',
                            position: 'absolute',
                            lineHeight: size
                        }}>
                            { num }
                        </div>
                    )
                    }
                }
            </Motion>


        );
    }
}

BubbleAnimated.propTypes = {
    size: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    from: PropTypes.object.isRequired,
    to: PropTypes.object.isRequired,
    handleTransitionEnd: PropTypes.func.isRequired
};

export default BubbleAnimated;
