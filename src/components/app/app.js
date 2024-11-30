import './app.css'

import { Component } from 'react'
import styled from 'styled-components'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [
                { name: 'David', salary: 1000, increase: false, rise: false, id: 0 },
                { name: 'Martin', salary: 240, increase: true, rise: false, id: 1 },
                { name: 'Bob', salary: 400, increase: false, rise: true, id: 2 },
                { name: 'Lucy', salary: 1120, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 4
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(obj => obj.id === id)
            // const before = data.slice(0, index)
            // const after = data.slice(index+1)
            // const newData = [...before,...after]
            // return {data:newData}

            return {data: data.filter(obj => obj.id !== id)}
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            return {data: [...data, newItem]}
        });
    }
    onToggleProp = (id,prop) =>{
        // this.setState(({data}) => {
        //     const index = data.findIndex(obj => obj.id === id)
        //     const old = data[index]
        //     const newItem = {...old, increase: !old.increase}
        //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)]
        //     return {data: newArray}
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {return {...item, [prop]: !item[prop]}}
                return item
            })
        }))
    }
    searchEmpl = (items, term) => {
        if(term.length === 0){
            return items
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    }
    
    getTotalPrem = () => {
        const total = this.state.data.reduce((total, cur) => {
            return cur.rise ? total + 1 : total;
        }, 0);
        return total;
    };
    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }
    onFilterSelect = (filter) => {
        this.setState({filter})
    }
   
    render() {
        const {data, term, filter} = this.state
        const totalEmpl = this.state.data.length
        const visibleData = this.filterPost(this.searchEmpl(data, term), filter)

        return(
            <div className="app">
                <AppInfo totalEmpl = {totalEmpl} totalPrem = {this.getTotalPrem()}/>
                <div className="search-panel">
                    <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployersList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
    
}

export default App