import React, { Component } from 'react'
import './searchForm.css'

class SearchForm extends Component {
  render() {
    const printType = this.props.selectOptions.printType;
    const bookType = this.props.selectOptions.bookType;

    const printType__options= printType.map((option, i)=> {
      return <option value={option} key={i}>{option}</option>;
     });

    const bookType__options= bookType.map((option, i)=> {
     return <option value={option} key={i}>{option}</option>;
    });

    return (
      <form 
        className="searchForm" 
        onSubmit={e => this.props.handleSubmit(e)}>
        <div className="searchBar">
          <label htmlFor="searchTerm">Search:</label>
          <input type="text"  
            id="searchTerm" 
            placeholder="henry" 
            name="searchTerm"
            onChange={inp => this.props.handleChangeSearchTerm(inp.target.value)}
          />
          <button type="submit">Submit</button>
        </div>
        <div className="filterBar">
          <label htmlFor="printType">Print Type:</label>
          <select id="printType"  
            onChange={sel => this.props.handlePrintTypeSel(sel.target.value)}>
           {printType__options}
          </select>

          <label htmlFor="bookType">Book Type:</label>
          <select id="bookType"
            onChange={sel => this.props.handleBookTypeSel(sel.target.value)}>
           {bookType__options}
          </select>
        </div>
      </form>
    );
  }
}

export default SearchForm;