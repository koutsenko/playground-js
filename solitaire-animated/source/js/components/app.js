import React      from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import actions from '../actions/app';
import Card from './card';
import holders from '../constants/holders';

import selectors from '../selectors/app'

class App extends React.Component {
  componentDidMount() {
    this.props.resetDeck();
  }

  buildCards(source, name, isStack) {
    return source.map(function(item, index) {
      return <Card flip={item.flip} id={item.id} key={item.id} parentElement={this.refs[name]} isStack={isStack} index={index}/>;
    }.bind(this));
  }

  render() {
    /**
     * Важно рендерить карты единой пачкой, иначе реакт будет их перемонтировать с потерей внутреннего стейта и прочими "сюрпризами".
     */
    let cards = []
      .concat(this.buildCards(this.props.deck,    'deck'))
      .concat(this.buildCards(this.props.open,    'moved'))
      .concat(this.buildCards(this.props.stack1,  'stack1', true))
      .concat(this.buildCards(this.props.stack2,  'stack2', true))
    ;

    return (
      <div className="app">
        <div className="menu">
          <button disabled={this.props.locked} onClick={this.props.resetDeck}>Полный сброс колоды</button>
          <button disabled={this.props.locked} onClick={this.props.resetDeck2}>Сбор колоды по очереди</button>
          <button disabled={this.props.locked} onClick={this.props.openCard}>Открыть одну карту</button>
          <button disabled={this.props.locked} onClick={this.props.moveStack1Cards}>Переместить между стеками</button>
          <button disabled={this.props.locked} onClick={this.props.fillStack1Cards}>Открыть 4 карты в стек1</button>
        </div>
        <div className="board">
          <div ref="deck" className="holder deck">deck</div>
          <div ref="moved" className="holder moved">moved</div>
          <div ref="stack1" className="holder stack1">stack1</div>
          <div ref="stack2" className="holder stack2">stack2</div>
          {cards}
        </div>
      </div>
    );
  }
};

/**
 * Функция данного View - рендерить карты, находящиеся в 4-х холдерах.
 * Т.е. по сути надо предоставить 4 массива объектов. 
 */
const mapStateToProps = function(state) {
  return {
    locked  : state.gui.locked,
    deck    : selectors.getDeckCards(state),
    open    : selectors.getOpenCards(state),
    stack1  : selectors.getStack1Cards(state),
    stack2  : selectors.getStack2Cards(state)
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    resetDeck       : bindActionCreators(actions.reset  , dispatch),
    resetDeck2      : bindActionCreators(actions.reset2 , dispatch),
    openCard        : bindActionCreators(actions.open   , dispatch),
    fillStack1Cards : bindActionCreators(actions.fill   , dispatch),
    moveStack1Cards : bindActionCreators(actions.move   , dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);