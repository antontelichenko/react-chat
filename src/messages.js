import React, { Component } from 'react'

export default class Messages extends Component {
    submitForm(e) {
        e.preventDefault()
        this.props.newMessage('@john214', this.input.value, Date.now())
        this.input.value = ''
    }
    render() {
        return (
            <div className="chat">
            <form onSubmit={this.submitForm.bind(this)} action="#">
            {this.props.messages.map(m => {
                const d = new Date(m.datetime)
                return (
                    <p key={d.datetime} className="message">
                        <span className="message__date">{`${d.getDate()}/${d.getMonth()} ${d.getHours()}:${d.getMinutes()}`}</span>
                        <span className="message__author">{m.author}:</span>
                        <span>{m.text}</span>
                    </p>
                )
            })}
                <input ref={(input) => this.input=input} type="text" className="chat__input" />
            </form>
        </div>

        )
    }
}