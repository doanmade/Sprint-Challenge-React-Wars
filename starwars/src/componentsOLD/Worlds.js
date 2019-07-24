import React from "react";

class Worlds extends React.Component {
  render() {
    return (
      <div className="characters">
        <h2>{this.props.home}</h2>
        <p>Terrain: {this.props.terrain}</p>
        <p>Gravitaional Pull: {this.props.gravity}</p>
        <p> Population: {this.props.pop}</p>
      </div>
    );
  }
}

export default Worlds;

// class ToggleBox extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       // toggle box is closed initially
//       isOpened: false
//     };
//     // http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
//     this.toggleBox = this.toggleBox.bind(this);
//   }

//   toggleBox() {
//     this.setState(oldState => ({ isOpened: !oldState.isOpened }));
//   }

//   render() {
//     const { title, children } = this.props;
//     const { isOpened } = this.state;
//     return (
//       <div className="box">
//         <div className="boxTitle" onClick={this.toggleBox}>
//           {title}
//         </div>
//         {isOpened && children && <div className="boxContent">{children}</div>}
//       </div>
//     );
//   }
// }
