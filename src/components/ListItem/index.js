import React,{Component} from "react";

class ListItem extends Component {
    // function ListItem(props){

    componentDidMount() {
        console.log(this.props.handleClick)
    }

    //     
    // }
    render() {

        return (
            <div
            style={this.props.style} onClick={this.props.handleClick} id={this.props.text}
            >
                
                    {this.props.text}
                
            </div>
        )
    }
}

export default ListItem;