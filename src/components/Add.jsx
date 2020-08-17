import React, { Component } from 'react';
import {Modal , Button, Form} from 'semantic-ui-react';
import uuid from 'react-uuid'
class Add extends Component {
    state = {
        id :uuid(),
        name : "",
        username : "",
    };
    onInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,

        });

    };
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name:"", username:""});
        
    };
        render() {
        const {name, username}=this.state;
        return (
            <Modal trigger={<Button> Add New User</Button>}>
                <Modal.Header > Add new User</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.onFormSubmit}> 
                        <Form.Input 
                        name = 'name'
                        label = "Full Name" 
                        placeholder = "enter your Full Name"
                        value={name}
                        onChange = {this.onInputChange}
                        >
                            </Form.Input>
                        <Form.Input
                        name = 'username'
                         label = "Username" 
                        placeholder = "enter your username"
                        value = {username}
                        onChange={this.onInputChange}
                        >
                           
                        </Form.Input>
                        <Button content = "Submit" type="submit"></Button>

                    </Form>
                </Modal.Content>

            </Modal>
        );
    }
}

export default Add;