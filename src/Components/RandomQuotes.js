import React from 'react';
import './RandomQuotes.css';
import data from '../data/data.json';


const Colors = ['#223344','#ff2211','#102030','#aa10cc','#e46969' ,'#868d26' ,'#3f7216']


class RandomQuotes extends React.Component{
    constructor(props){
        super(props);
        this.state={
                current:Math.floor(Math.random()*data.length),
                bgcolor:0,
                colors:Colors
            }
        this.changeQuote = this.changeQuote.bind(this);
    }

    changeQuote(){
        let newNum = Math.floor(Math.random()*(data.length-1));
        this.setState({current:newNum});
        if(newNum == this.state.current){
            this.setState({current:newNum+1});
        }   
        let newColor = Math.floor(Math.random()*(this.state.colors.length-1))
        this.setState({bgcolor:newColor})
        if(newColor==this.state.bgcolor){
            this.setState({bgcolor:newColor+1})
        }
    }

    render(){
        console.log(this.state)
        return (
            <div style={{backgroundColor:this.state.colors[this.state.bgcolor]}} className="container">
                <div className="quote-container" style={{color:this.state.colors[this.state.bgcolor]}}>
                
                <h1><i class="fa fa-quote-left"></i> {data[this.state.current]['text']}</h1>
        <h4>{data[this.state.current]['author']}</h4>

        <div className="quote-footer">
            <button style={{backgroundColor:this.state.colors[this.state.bgcolor]}} onClick={this.changeQuote}>Change Quote</button>
        </div>
                </div>
        
            </div>
        )
    }
}




export default RandomQuotes;