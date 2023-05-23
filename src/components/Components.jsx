import React, { Component } from "react";
class Components extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "Red", users: [] };
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts/`)
      .then((res) => res.json())
      // .then((res) => console.log(res));
      .then((jsonResponse) => {
        this.setState({ users: jsonResponse });
        console.log(jsonResponse);
      });
  }
  render() {
    return (
      <ul>
        {this.state.users.map((user) => (
          <li key={user.id}>{user.title.slice(0, 12)}</li>
        ))}
        {this.state.color}
      </ul>
    );
  }
}
export default Components;

// import React, { Component } from "react";
// class Components extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Bunzo",
//       titles: [],
//     };
//   }
//   async componentDidMount() {
//     const url = "https://jsonplaceholder.typicode.com/posts/";
//     const res = await fetch(url).then((ress) => {
//       // res.json();
//       this.setState({ titles: ress.json() });
//       console.log(titles);
//       // console.log();
//     });
//     console.log(res);
//     this.setState({ titles: res });
//   }
//   render() {
//     return (
//       <>
//         {/* {titles.map((title) => (
//           <h1 key={title.id}>{title}</h1>
//         ))} */}
//       </>
//     );
//   }
// }
// export default Components;
