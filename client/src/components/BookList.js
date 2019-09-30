import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class BookList extends Component {
  state = {
    books: [
      { id: uuid(), name: "Part 3 Star Wars"},
      { id: uuid(), name: "Widow in the woods"},
      { id: uuid(), name: "Sleepy Hallow"},
      { id: uuid(), name: "Sleepy Hallow part 2"}
    ]
  }
  render() {
    const { books }= this.state;
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
                   <div className="remove-btn"><Button 
                     className="remove-btn" 
                     color="danger" 
                     size="sm" 
                     onClick={() => {
                       this.setState (state => ({
                       books: state.books.filter(book => book.id !== id)
                       }));
                   }}> &times; </Button></div>
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
export default BookList;