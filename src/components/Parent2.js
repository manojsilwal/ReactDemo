import React from 'react'
let time1 = 0, time2 = 0;
export default class Parent2 extends React.Component {

    componentWillReceiveProps(nextProps){
        time1 = window.performance.now();
    }
    /*shouldComponentUpdate(nextProps){
        if(!isEqual({key:12},{key1:10})){
           console.log('something');
           return true;
        }
        return false;
    }*/
    componentWillUpdate(){
        time2 = window.performance.now();
    }

    render(){
        console.log("Parent2 is re-rendering");
        return (this.props.children);
    }

    componentDidUpdate(){
        console.log("Render time1",window.performance.now() - time1,window.performance.now(),time1);
        console.log("Render time2",window.performance.now() - time2,window.performance.now(),time2);
    }

}