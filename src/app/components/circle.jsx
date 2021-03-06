import alphaify from 'alphaify';
import React from 'react';
import PropTypes from 'prop-types';

class Circle extends React.Component {

  getStyles() {
    return {
      unselected: {
        fill: alphaify('#D81100', 0.6)
      },
      selected: {
        fill: '#DB1100'
      }
    };
  }

  render() {
    const styles = this.getStyles();
    let style;
    let radius;
    if (this.props.selected) {
      style = styles.selected;
      radius = 15;
    } else {
      style = styles.unselected;
      radius = 10;
    }

    return (
      <circle
        style={style}
        r={radius}
        id={this.props.id}
        onClick={this.props.onClick}
        transform={this.props.transform} />
    );
  }

}

Circle.propTypes = {
  transform: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default Circle;
