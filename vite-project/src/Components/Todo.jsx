import React from "react";

export default class Todoapp extends React.Component {
  constructor() {
    super();
    this.state = {
      textValue: "",
      todoList: []
    };
  }

  handleChange = (event) => {
    this.setState({ textValue: event.target.value });
  };

  handleClick = () => {
    if (this.state.textValue.trim() !== "") {
      this.setState({
        todoList: [...this.state.todoList, this.state.textValue],
        textValue: ""
      });
    }
  };

  handleUpdate = (index) => {
    let newValue = prompt("Enter the new Value");
    if (newValue !== null) {
      this.setState((prevState) => {
        const updatedArr = prevState.todoList.map((el, i) => (i === index ? newValue : el));
        return { todoList: updatedArr };
      });
    }
  };

  handleDelete = (index) => {
    this.setState((prevState) => {
      const updatedArr = prevState.todoList.filter((el, i) => i !== index);
      return { todoList: updatedArr };
    });
  };
  

  render() {
    const { textValue, todoList } = this.state;

    return (
      <>
        <div className="addTodo">
          <input
            type="text"
            placeholder="Enter the Task"
            value={textValue}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add</button>
        
        <div>
          {todoList.map((el, i) => (
            <div key={i}>
              <p>{el}</p>
              <button onClick={() => this.handleUpdate(i)}>Update</button>
              <button onClick={() => this.handleDelete(i)}>Delete</button>
            </div>
            
          ))}
          </div>
        </div>
      </>
    );
  }
}
