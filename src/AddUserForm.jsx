import React, { Component, Fragment } from 'react';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          publisher: "",
            author: "",
            genre: "",
            title: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.publisher] : e.target.value
        })
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({publisher: "", author: "", genre: "", title: ""})
        console.log("submitted");
    }
    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="publisher">Publisher</label>
                        <input type="text" name="publisher" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="genre">Genre</label>
                        <input type="text" name="genre" onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" onChange={this.handleChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        );
    }
}

export default AddUserForm;
