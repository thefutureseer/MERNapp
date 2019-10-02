import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getBooks } from '../actions/bookActions';
import PropTypes from 'prop-types';

class BookList extends Component {

  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props.book;
    return (
      <Container>
        <Button
          color="dark"
          style={{marginBottom: "2rem"}}
          onClick={ () => {
            const name = prompt('enter book');
            if ( name ) {
              this.setState(state => ({
                books: [ ...state.books, {id: uuid(), name: name }]
              }));
            }
          }
          }>Add Item</Button>
          <ListGroup>
            <TransitionGroup className="book-list">
              {books.map(({ id, name}) => (
               <CSSTransition key={id} timeout={500} classNames="fade">
                 <ListGroupItem>
                   <div className="remove-btn">
                     <Button 
                        className="remove-btn" 
                        color="danger" 
                        size="sm" 
                        onClick={() => {
                          this.setState (state => ({
                           books: state.books.filter(book => book.id !== id)
                          }));
                        }}> 
                         &times; 
                     </Button>
                   </div>
                   <div className="list">
                     {name}
                   </div>
                 </ListGroupItem>
               </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
      </Container>
    );
  }
}

BookList.propTypes = {
  getBooks: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  book: state.book
});

export default connect(mapStateToProps, { getBooks })(BookList);