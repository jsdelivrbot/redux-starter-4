import React,  { Component } from 'React';
import { connect } from 'react-redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((map)=> {
            return(
                <li className ="list-group-item" key ="book.title">{book.title}</li>
            )
        });
    }
    
    render(){
        console.log(this.props.books);
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps (state) {
    return {
        books: state.books
    }
}

export default connect (mapStateToProps)(BookList);