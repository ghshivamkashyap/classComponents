import React, { useState } from "react";

class ClassComponents extends React.Component {
  constructor(props) {
    super(props);
    console.log("Class constructor called");

    // const [s, setS] = useState();
    this.state = {
      count: 0,
      name: "Shivam kashyap",
    };
    console.log(this.state);
  }

  render() {

    return <div>i am class based component</div>;
  }
}

export default ClassComponents;
