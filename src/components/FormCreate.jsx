import React, { Component } from 'react';
import { Button, FormGroup, FormCheck, FormControl, FormLabel } from 'react-bootstrap'

export class FormCreate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            priority: 1,
            due_date: '',
            completed: false
        };
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDue_date = this.onChangeDue_date.bind(this);
        this.onChangePriority = this.onChangePriority.bind(this);
        this.onChangeCompleted = this.onChangeCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    onChangeTitle(event) {
        this.setState({ title: event.target.value });
    }
    onChangeDescription(event) {
        this.setState({ description: event.target.value });
    }
    onChangeDue_date(event) {
        this.setState({ due_date: event.target.value });
    }
    onChangePriority(event) {
        this.setState({ priority: event.target.value });
    }
    onChangeCompleted(event) {
        this.setState({ completed: event.target.checked });
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('onSubmit');
        this.props.onSubmit({
            title: this.state.title, description: this.state.description,
            priority: parseInt(this.state.priority), due_date: this.state.due_date, completed: this.state.completed
        })
        console.log('onSubmitValues');
        console.log({
            title: this.state.title, description: this.state.description,
            priority: parseInt(this.state.priority), due_date: this.state.due_date, completed: this.state.completed
        });
        this.props.closeModal();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <FormGroup controlId="title">
                    <FormLabel>Title</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="title"
                        required
                        value={this.state.title} onChange={this.onChangeTitle}
                    />
                </FormGroup>
                <FormGroup controlId="description">
                    <FormLabel>Description</FormLabel>
                    <FormControl
                        type="text"
                        placeholder="description"
                        required
                        value={this.state.description} onChange={this.onChangeDescription}
                    />
                </FormGroup>
                <FormGroup controlId="priority">
                    <FormLabel>Priority</FormLabel>
                    <FormControl as="select" required
                        value={this.state.priority} onChange={this.onChangePriority}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </FormControl>
                </FormGroup>
                <FormGroup controlId="due_date">
                    <FormLabel>Due date</FormLabel>
                    <FormControl type="date" required
                        value={this.state.due_date} onChange={this.onChangeDue_date} />
                </FormGroup>
                <FormGroup controlId="completed">
                    <FormCheck className="taskCheckbox" type="checkbox"
                        label="Completed"
                        value={this.state.completed} onChange={this.onChangeCompleted} />
                </FormGroup>
                <Button block type="submit">
                    Save
                </Button>
            </form>
        );
    }
}
export default FormCreate;