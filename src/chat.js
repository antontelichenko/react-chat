import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Messages from './messages';
import UsersList from './users';
import {AddNewUser, newMessage} from './actions';

class Chat extends Component {
    render() {

        return (
            <main className="main-wrapper">
                <Messages newMessage={this.props.newMessage} messages={this.props.messages}/>
                <UsersList users={this.props.users} AddNewUser={this.props.AddNewUser} />
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.usersReducer,
        messages: state.messagesReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        AddNewUser: bindActionCreators(AddNewUser, dispatch),
        newMessage: bindActionCreators(newMessage, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)