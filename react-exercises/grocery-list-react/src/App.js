import React, { Component } from "react";
import "./App.css";
class App extends Component {
  state = {
    groceryList: [],
    groceryItemInput: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  addGroceryItem = (e) => {
    e.preventDefault();
    const { groceryItemInput, groceryList } = this.state;

    if (groceryItemInput.length) {
      // Find if we have a similar item
      const itemObject = groceryList.find((x) => x.name === groceryItemInput);
      if (itemObject) {
        // Get the index and update the count from the list
        const itemIndex = groceryList.indexOf(itemObject);
        let ItemCount = groceryList[itemIndex].count;
        groceryList[itemIndex].count = ItemCount + 1;
      } else {
        // Just add the new item
        groceryList.push({ name: groceryItemInput, count: 0 });
      }

      this.setState({ groceryList, groceryItemInput: "" });
    }
  };

  clearGroceryList = (e) => this.setState({ groceryList: [] });
  render() {
    const { groceryItemInput, groceryList } = this.state;
    return (
      <div className='main-container'>
        <div className='container'>
          <h2>Grocery List</h2>
          <div className='input-container'>
            <input
              type='text'
              name='groceryItemInput'
              value={groceryItemInput}
              onChange={this.onChange}
            />
            <button
              className='add-grocery-item-btn'
              onClick={this.addGroceryItem}
            >
              Add
            </button>
            <button
              className='clear-grocery-btn'
              onClick={this.clearGroceryList}
            >
              Clear
            </button>
          </div>
          <div className='grocery-list-container'>
            <ul className='item-list'>
              {groceryList.length ? (
                groceryList.map((item, idx) => (
                  <li key={idx}>
                    {item.name} &nbsp; Count : {item.count}
                  </li>
                ))
              ) : (
                <li>Please add Item</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
