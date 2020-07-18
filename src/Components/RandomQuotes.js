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
                colors:Colors,
                animation:'animate__animated animate__fadeInLeft',
                authorAnimation:'animate__animated animate__fadeInRight',
            }
        this.changeQuote = this.changeQuote.bind(this);
        this.getShareContent =this.getShareContent.bind(this);
    }

    changeQuote(){
        //newQuote
        let newNum = Math.floor(Math.random()*(data.length-1));
        this.setState({current:newNum});
        if(newNum == this.state.current){
            this.setState({current:newNum+1});
        }   

        //newColor
        let newColor = Math.floor(Math.random()*(this.state.colors.length-1))
        this.setState({bgcolor:newColor})
        if(newColor==this.state.bgcolor){
            this.setState({bgcolor:newColor+1})
        }

        //animateQuote
        if(this.state.animation==='animate__animated animate__fadeInLeft'){
        this.setState({animation:'animate__animated animate__fadeInRight'})}
        else{
            this.setState({animation:'animate__animated animate__fadeInLeft'})
        }

        //animateAuthor
        if(this.state.authorAnimation==='animate__animated animate__fadeInLeft')
        this.setState({authorAnimation:'animate__animated animate__fadeInRight'})
        else
        this.setState({authorAnimation:'animate__animated animate__fadeInLeft'})
             
    }

    getShareContent(){
        let words= data[this.state.current]['text']
        words=words.replace(/\s/g,"+")
        let authorsName=data[this.state.current]['author']
        authorsName = authorsName.replace(/\s/g,"+")
        return words+"+-+"+authorsName
    }

    render(){
        let author=data[this.state.current]['author'];
        if(author==null){
            author='Anonymous'
        }
        let share=this.getShareContent()
        let twitterShare = "https://twitter.com/intent/tweet?text="+share
        console.log(twitterShare)
        return (
            <div style={{backgroundColor:this.state.colors[this.state.bgcolor]}} className="container">
                <div className="quote-container" style={{color:this.state.colors[this.state.bgcolor]}}>
                
                <h1 className={this.state.animation}><i class="fa fa-quote-left"></i> {data[this.state.current]['text']}</h1>
        <h4 className={this.state.authorAnimation}> ~ {author} </h4>

        <div className="quote-footer" >
        <div>
        <a style={{color:this.state.colors[this.state.bgcolor]}} href={twitterShare} target="#_blank"><i className="fa fa-twitter" ></i> </a>
        </div> 
        <button style={{backgroundColor:this.state.colors[this.state.bgcolor],border:'none'}} onClick={this.changeQuote}>Change Quote</button>
        </div>
                </div>
        
            </div>
        )
    }
}




export default RandomQuotes;