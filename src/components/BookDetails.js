import React,{Component} from 'react'

class BookDetails extends Component {
    
render(){
    console.log('details book',this.props.book)
    
    if(this.props.book===null){
        return(
            <div>Click on a book to get Details </div>
        )
    }
    else {
        return (
            <div> 
                <h2> {this.props.book.title }</h2>
                <h4> {this.props.book.author }</h4>
                <p> {this.props.book.content }</p>
            </div>
        )
    }
    
}
}
export default BookDetails