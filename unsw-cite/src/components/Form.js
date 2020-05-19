import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.maxEntries = 50;
        this.state = {
             username: '',
             comments: '',
             gender: 'N/A',
             entries: JSON.parse(localStorage.getItem('entries')) || [],
             availableKeys: JSON.parse(localStorage.getItem('availableKeys'))|| [...Array(this.maxEntries).keys()]
        }

    } 
    handleChange = (event, newState) => {
        this.setState({
                [newState]: event.target.value
        }, () => {
            console.log(this.state);
        })
        
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const curr = this.state.entries;
        let key = this.getAvailableKey();
        if (typeof key === "undefined") {
            alert(`Sorry you can't have more than ${this.maxEntries} items at a time!`);
            return;
        } 
        
        curr.push({id: key, username:this.state.username, gender: this.state.gender, comments:this.state.comments})
        this.setState({
            entries: curr,
            currentId: parseInt(this.state.currentId) + 1
        }, () => {
            localStorage.setItem('entries', JSON.stringify(this.state.entries));
        })
        
    }
    handleRemove = (e) => {
        let id = e.target.parentNode.dataset.id;
        let entries = this.state.entries;
        entries = entries.filter((entry) => parseInt(entry.id) !== parseInt(id))
        this.setState({
            entries: entries
        }, () => {
            localStorage.setItem('entries', JSON.stringify(this.state.entries));
            this.addAvailableKey(id);
        })
    }
    addAvailableKey = (id) => {
        let currentKeys = this.state.availableKeys;
        currentKeys.push(parseInt(id));
        this.setState({
            availableKeys: currentKeys
        }, () => {
            localStorage.setItem('availableKeys', JSON.stringify(this.state.availableKeys));
        })
    }
    displayEntries = () => {
        return this.state.entries.map((entry) => 
            <div data-id={entry.id} key={entry.id}>ID: {entry.id} 
            Username: {entry.username} - Sex: {entry.gender} | 
            Comments: {entry.comments} 
            <button onClick={this.handleRemove}>Delete</button></div>
        )
    }
    getAvailableKey = () => {
        let currentKeys = this.state.availableKeys;
        let key = currentKeys.shift();

        this.setState({
            availableKeys: currentKeys
        }, () => {
            localStorage.setItem('availableKeys', JSON.stringify(this.state.availableKeys));
        })

        return key;
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Username:
                        </label>
                        <input 
                            type="text" 
                            value={this.state.username} 
                            onChange={(event) => this.handleChange(event, "username")}
                        />
                    </div>
                    <div>
                        <label>
                            Comments:
                        </label>
                        <textarea
                            type="text" 
                            value={this.state.comments} 
                            onChange={(event) => this.handleChange(event, "comments")}
                        />
                    </div>
                    <div>
                        <label>
                            Gender:
                        </label>
                        <select value={this.state.gender}  onChange={(event => this.handleChange(event, "gender"))}>
                            <option value="N/A">N/A</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {this.displayEntries()}
            </div>
        )
    }
}

export default Form
