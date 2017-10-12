import Test1 from "./Test1";
import Parent2 from "./Parent2";
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    todos: state.todos
});

class Parent1 extends React.Component {

    render(){
        console.log("Parent1 is re-rendering",this.props.todos);
        return (
            <div>
                <Parent2>
                    {/*<Test1>inside div</Test1>
                    <Test1>inside div</Test1>*/}
                    <Test1 value={this.props.todos}/>
                </Parent2>
            </div>
                );
    }

}
export default connect(
    mapStateToProps,
)(Parent1)