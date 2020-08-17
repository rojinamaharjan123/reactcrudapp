import React, { Component } from 'react';
import Edit from "./Edit";
import { Table, Button} from 'semantic-ui-react';



class View extends Component {
  
    state = {
        isOpen : false,
        id : "",

    };
    onEditClick = (id)=>{
        this.setState({
            isOpen : true,
            id :id,

        });

    };
    onClose = () =>
    {
       this.setState({
           isOpen :false,

       });

    };
    onUserDelete = (id) =>{
        this.props.onDeleteClick(id);

    };
    render() {
        //const {data} = this.props;
        const { data, getUserById  , onEdit } = this.props;
        const { isOpen ,id } = this.state;
        
    
        // console.log(data);
        return (
            <div> 
                <Edit isOpen = {isOpen} 
                onClose = {this.onClose}
                id  = {id}
                getUserById = {getUserById}
                onEdit = {onEdit}

                   ></Edit>
                {/* <Edit isOpen = {isOpen} onClose = {this.onClose} id  ={id}  ></Edit> */}
                <Table sortable called fixed >
                    <Table.Header>
                        <Table.Row>
                        <Table.HeaderCell> Full Name</Table.HeaderCell>
                        <Table.HeaderCell> Username</Table.HeaderCell>
                        <Table.HeaderCell> Actions</Table.HeaderCell>
                         </Table.Row>
                         </Table.Header>
                         <Table.Body>
                             
                             {data.map ((user) => (
                                    <Table.Row>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.username} </Table.Cell>
                                    <Table.Cell>
                                        <Button content ="Edit" onClick = {this.onEditClick.bind(this,user.id)}></Button>
                                        <Button content ="Delete"
                                         onClick = {this.onUserDelete.bind( this, user.id)}>

                                         </Button>
                                    </Table.Cell>
   
                                </Table.Row>

                                 ))
                             }

                         </Table.Body>
                    
                </Table>
              
            </div>
        );
    }
}

export default View;