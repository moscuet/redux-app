import React, { Component } from 'react'
import { connect } from 'react-redux'
import { plusOne, minusOne, changeName,changeBackground,selectedBook,fetchCountries } from './store/actions'
import BookDetails from './components/BookDetails'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.props.fetchCountries()
  }
  render() {
    console.log('lets see the props', this.props)
    const bookList = this.props.books.books.map(( book,index) =>(
     <h1 onClick= { () =>this.props.selectedBook(index)} > {book.title}</h1>
    ))

    const countriesList = this.props.countries.map((country) => (
     <li> <h1> {country.name}</h1> </li> 
    ))

    return (
      <div className='App'>

        <div style={{ backgroundColor: this.props.background }}>
            <h2>COUNT: {this.props.counter} { } {this.props.name}</h2>
            <button onClick={this.props.plusOne}>Add One</button>
            <button onClick={this.props.minusOne}>Minus One</button>
            <button onClick= {this.props.changeName}> CHANGE NAME</button>
            <button onClick= {this.props.changeBackground}> CHANGE BACKGROUND</button>
            <ul> {bookList} </ul>
             <BookDetails book={this.props.books.selectedBook}/>

        </div>

        <div>

    <ul> {countriesList}</ul>

        </div>



      </div>

    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return { 
    counter: state.counter,
    name:state.name,
    background: state.background,
    books:state.book,
    countries:state.countries}
}

// use this when we assign action as a variable, not function but [this doesnt work for fetch!!??
// const mapActionToProps = dispatch => ({
//     plusOne: () => dispatch(plusOne),
//     minusOne: () => dispatch(minusOne),
//     changeName:()=> dispatch(changeName),
//     changeBackground:()=> dispatch(changeBackground),
//     selectedBook: index => dispatch(selectedBook(index)),   
// })]

const mapActionToProps =
  {
  plusOne,
  minusOne,
  changeName,
  selectedBook,
  changeBackground,
  fetchCountries
}

export default connect(mapStateToProps, mapActionToProps)(App)
