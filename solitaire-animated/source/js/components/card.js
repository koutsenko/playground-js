import PropTypes from 'prop-types';
import React      from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Motion, spring } from 'react-motion';

function randomize(dispersion) {
  return Math.round((Math.random()-0.5) * dispersion);
};

class Card extends React.Component {
  /**
   * Генерируем "погрешность" с которой карта ложится на стол.
   * Пока что она неизменная на протяжении всего lifecycle объекта карты.
   */
  constructor(props) {
    super(props);
    this.state = {};
    this.state.deltas = {
      x: randomize(10),
      y: randomize(10),
      r: randomize(5)
    }
  }

  /**
   * "Включаем" анимацию, если сменились координаты родительского элемента, в т.ч. по причине его смены.
   * Здесь setState не вызывает лишней перерисовки.
   */
  componentWillReceiveProps(nextProps) {
    this.setState({
      oldX: this.props.parentX,
      oldY: this.props.parentY
    });
    if ((this.props.parentX !== nextProps.parentX) || (this.props.parentY !== nextProps.parentY)) {
      this.setState({
        animating: true
      });
    }
  }

  /**
   * Обработчик конца анимации - "выключаем" её.
   */
  onAnimationEnd() {
    this.setState({
      animating : false
    });
  }

  getReference(element) {
    this.cardElement = element;
  }

  render() {
    let rank = this.props.id[0];
    let suit = this.props.id[1];
    let redClass = ((suit === 'H') || (suit === 'D')) ? ' red' : '';
    let suitSymbol = {
      'H': '♥',
      'S': '♠',
      'D': '♦',
      'C': '♣'
    }[suit];
    let rankSymbol = (rank === '=') ? '10' : rank;

    let r0 = this.props.flip ? 0 : 180;
    let r1 = this.props.flip ? 180 : 0;
    
    let dx0 = this.state.animating ? spring(this.props.parentX - this.state.oldX) : 0;
    let dy0 = this.state.animating ? spring(this.props.parentY - this.state.oldY) : 0;
    let ay0 = this.state.animating ? spring(r0) : r0;
    let ay1 = this.state.animating ? spring(r1) : r1;
    
    return (
      <Motion onRest={this.onAnimationEnd.bind(this)} style={{
        dx: dx0,
        dy: dy0,
        ay0: ay0,
        ay1: ay1
      }}>
        {
          function(interpolatingStyle) { 

            let dx = this.state.deltas.x;
            let dy = this.state.deltas.y;

            if (!this.state.animating) {
              dx += this.props.parentX;
              dy += this.props.parentY;
            } else {
              dx += this.state.oldX + interpolatingStyle.dx;
              dy += this.state.oldY + interpolatingStyle.dy;
            }
            
            let dr = this.state.deltas.r;

            let h = { 
              // FIXME: если раскидать карты по разным холдерам и их собрать, они приезжают в неправильном zIndex порядке и потом проходят сквозь друг друга.
              zIndex: this.props.index + 1 + (this.state.animating ? 1000 : 0)
            };
            let m = { transform: `translate(${dx}px,${dy}px) rotate(${dr}deg)` };
            let st = Object.assign(m, h);
            
            let doRotate0 = interpolatingStyle.ay0 !== 0;
            let doRotate1 = interpolatingStyle.ay1 !== 0;

            let faceStyle = doRotate0 ? { transform: `rotateY(${interpolatingStyle.ay0}deg)`} : null;
            let backStyle = doRotate1 ? { transform: `rotateY(${interpolatingStyle.ay1}deg)`} : null;

            return (
              <div className="card" ref={this.getReference.bind(this)} style={st}>
                <div className={"face" + redClass} style={faceStyle}>{rankSymbol+suitSymbol}</div>
                <div className="back" style={backStyle}></div>
              </div>
            );
          }.bind(this)
        }
      </Motion>
    );
  }
};

Card.propTypes = {
  id            : PropTypes.string.isRequired,
  index         : PropTypes.number,
  flip          : PropTypes.bool.isRequired,
  isStack       : PropTypes.bool,
  parentElement : PropTypes.object.isRequired,
};

const mapStateToProps = function(state, ownProps) {
  let rect    = ownProps.parentElement.getBoundingClientRect();
  let height  = rect.bottom - rect.top;
  let dy      = ownProps.isStack ? ((height/3) * (ownProps.index)) : 0;
          
  return {
    height  : height,
    parentX : rect.left,
    parentY : rect.top + dy
  };
}

export default connect(mapStateToProps)(Card);










