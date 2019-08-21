import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

export default class Modal extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this._layer = document.createElement('div');
    document.body.appendChild(this._layer);
    this._renderLayer();
  }

  componentDidUpdate() {
    this._renderLayer();
  }

  componentWillUnmount() {
    this._unrenderLayer();
    document.body.removeChild(this._layer);
  }

  _renderLayer = () => {
    const layerElement = this.renderLayer();

    if (layerElement == null) {
      ReactDOM.render(<noscript />, this._layer);
    } else {
      ReactDOM.render(layerElement, this._layer);
    }

    if (this.layerDidMount) {
      this.layerDidMount(this._layer);
    }
  };

  _unrenderLayer = () => {
    if (this.layerWillUnmount) {
      this.layerWillUnmount(this._layer);
    }

    ReactDOM.unmountComponentAtNode(this._layer);
  };

  hide = () => {
    this.props.onHide();
  };

  renderLayer = () => {
    const { children, show } = this.props;

    if (!show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="mark" onClick={this.hide}> </div>
        <div className="content">
          <a className="close" onClick={this.hide}>×</a>
          {children}
        </div>
      </div>
    )
  };

  layerDidMount = () => {

  };

  layerWillUnmount = () => {

  };

  render() {
    return null;
  }
}

Modal.defaultProps = {
  show: false,
  onHide: () => {}
};
