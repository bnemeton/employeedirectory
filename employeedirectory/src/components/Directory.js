import React, { Component, useState } from 'react'
import API from '../utils/API'
import Header from '../components/Header'
import Search from '../components/Search'
import Table from '../components/Table'

class Directory extends Component {
    state = {
        results: [],
        allResults: [],
        search: ""
    }

    componentDidMount() {
        API.getEmployees()
            .then((res) => {
                this.setState({
                    ...this.state,
                    results: res.data.results,
                    allResults: res.data.results
                })
            })
    };

    handleInputUpdate = (e) => {
        const value = e.target.value;
        // if (value === "") {
        //     this.setState({
        //         ...this.state,
        //         re
        //     })
        // } 
        
        // this.setState({
        //     ...this.state,
        //     search: value
        // })
        
        const filtered = this.state.allResults
            .filter((result) => {
                return result.name.last.toLowerCase()
                    .includes(value.toLowerCase())
                
            })
        this.setState({
                ...this.state,
                results: filtered
            })
        }

    handleSort = (e) => {
        // const column = e.target.getAttribute("column")
        // console.log(column)
        const sortedResults = this.state.results.sort((a, b) => a.name.first > b.name.first ? 1 : -1)
        this.setState({
            ...this.state,
            results: sortedResults
        })
    }

    render() {
        return (
            <div>
                <Header />
                <Search 
                value={this.state.value}
                handleInputUpdate={this.handleInputUpdate} />
                <Table 
                results={this.state.results}
                handleSort={this.handleSort}
                />
            </div>
        )
    }
}

export default Directory;