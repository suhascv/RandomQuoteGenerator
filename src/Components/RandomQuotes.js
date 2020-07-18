import React from 'react';
import './RandomQuotes.css';
import data from '../data/data.json';


class RandomQuotes extends React.Component{
    constructor(props){
        super(props);
        this.state={
                current:Math.floor(Math.random()*data.length),
                bgcolor:0,
                colors:['#223344','#ff2211','#ee2211','#ddeeaa','#102030','#aa10cc']
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
        this.setState({bgcolor:this.state.colors[newColor]})
        if(newColor==this.state.bgcolor){
            this.setState({bgcolor:newColor+1})
        }
    }

    render(){
        return (
            <div style={{backgroundColor:this.state.colors[this.state.bgcolor]}} className="container">
                <div className="quote-container">
                <h1>{data[this.state.current]['text']}</h1>
        <h4>{data[this.state.current]['author']}</h4>
                </div>
        <button onClick={this.changeQuote}>Change Quote</button>
            </div>
        )
    }
}




export default RandomQuotes;