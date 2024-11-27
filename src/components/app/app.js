import './app.css'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployersList from '../employers-list/employers-list'
import EmployersAddForm from '../employers-add-form/employers-add-form'

export default function App(){
    const data = [
        {
            name: 'David',
            salary: 1000,
            increase: false,
            id: 1
        },
        {
            name: 'Martin',
            salary: 240,
            increase: true,
            id: 2
        },
        {
            name: 'Bob',
            salary: 400,
            increase: false,
            id: 3
        },
        {
            name: 'Lucy',
            salary: 1120,
            increase: false,
            id: 4
        },
    ]

    return(
        <div className="app">
            <AppInfo />
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            <EmployersList data={data} />
            <EmployersAddForm />
        </div>
    )
}

