import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Modal extends Component {

    componentDidMount() {
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = 'modal-wrapper';
        document.body.appendChild(this.modalTarget);
        this.renderModal();
    }

    render() {
        return <noscript />
    }

    renderModal() {
        ReactDom.render(<div>{this.props.children}</div>, this.modalTarget);
    }

    componentWillUnmount() {
        ReactDom.unmountComponentAtNode(this.modalTarget);
        document.body.removeChild(this.modalTarget);
    }
}

export default Modal;