import React, { Component } from 'react';
import { Modal } from '../components/Modal';
import TriggerButton from '../components/TriggerButton';

export class ModalContainer extends Component {

    state = { isShown: false };

    showModal = () => {
        this.setState({ isShown: true }, () => {
            this.closeButton.focus();
        });
        this.toggleScrollLock();
    };

    closeModal = () => {
        this.setState({ isShown: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };

    onClickOutside = (event) => {
        if (this.modal && this.modal.contains(event.target)) return;
        this.closeModal();
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    render() {

        console.log('Modal Container');
        console.log(this.props.onSubmit);

        const task = this.props.task;
        return (
            <React.Fragment>
                <TriggerButton className="triggerButton"
                    showModal={this.showModal}
                    buttonRef={(n) => (this.TriggerButton = n)}
                    triggerText={this.props.triggerText}
                />
                {this.state.isShown ? (
                    <Modal
                        task={task}
                        onSubmit={this.props.onSubmit}
                        modalRef={(n) => (this.modal = n)}
                        buttonRef={(n) => (this.closeButton = n)}
                        closeModal={this.closeModal}
                        onKeyDown={this.onKeyDown}
                        onClickOutside={this.onClickOutside}
                    />
                ) : null}
            </React.Fragment>
        );
    }
}
export default ModalContainer;