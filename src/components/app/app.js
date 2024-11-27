import './app.css'

import { Component } from 'react'

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
    onToggleIncrease = (id) =>{
        // this.setState(({data}) => {
        //     const index = data.findIndex(obj => obj.id === id)
        //     const old = data[index]
        //     const newItem = {...old, increase: !old.increase}
        //     const newArray = [...data.slice(0, index), newItem, ...data.slice(index+1)]
        //     return {data: newArray}
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {return {...item, increase: !item.increase}}
                return item
            })
        }))
    }
    onToggleRise = (id) =>{
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {return {...item, rise: !item.rise}}
                return item
            })
        }))
    }

    render() {
        return(
            <div className="app">
                <AppInfo />
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
                <EmployersList 
                    data={this.state.data} 
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
    
}

export default App