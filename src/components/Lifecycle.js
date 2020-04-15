import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super();
        
        this.state={
        list:[],
        toggle: true,
        }
    }

    handleClick=(event) => {
        event.preventDefault()
        const newList = [...this.state.list]
        newList.push({name: 'new name'});
        this.setState({
            list: newList,
        })
    }

    handleToggle=(event) => {
        event.preventDefault();
        this.setState({
            toggle: !this.state.toggle,
        })
    }
    

    // create list nd set state
    // where you will call api and set state from api
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(() => {
            let list=[{name:'jon'}];
        this.setState({
            list,
        });
        
        }, 2000)
    }
    // runs every time there is an event afterwards
    // always takes two arguments

    componentDidUpdate(prevProps,prevState){
        console.log('componentDidUpdate had been called')
        if(prevState.toggle !== this.state.toggle){
            console.log('make database call');
            const newList = [...this.state.list]
            newList.push({name: 'update name'});
            this.setState({
            list: newList,
        })
        }
    }

    render() {
        console.log('rendered')
        return (
            <div>
                {this.state.list.length !== 0 ?(
                    <div>
                    <h1>Lifecycle Component</h1>
                    <ul>
                    {this.state.list.map((item,idx) => {
                        return <li key={idx}>{item.name}</li>
                    })}
                    </ul>
                    <button onClick={this.handleClick}>Name</button>
                    <button onClick={this.handleToggle}>Toggle</button>
                </div>
                ) : (
                <h1>Loading...</h1>
                )}
                </div>
                
        );
    }
}
