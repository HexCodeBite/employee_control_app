import './EmployersList.css'

import EmployersListItem from '../employers-list-item/employers-list-item'

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployersListItem key={id} {...itemProps}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList