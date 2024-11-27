
import './employers-list-item.css'
import { Component } from 'react'

class EmployersListItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            increase: false,
            rise: false,
        }
        
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }))
    }
    onLike = () => {
        this.setState(({rise}) => ({
            rise: !rise
        }))
    }

    render() {
        const {name, salary} = this.props
        const {increase,rise} = this.state
        
        let classNames = 'list-group-item d-flex justify-content-between'
        if(increase) classNames += ' increase'
        if(rise) classNames += ' like'
        
        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' $'} />
                <div>
                    <button type="button" className="btn-cookie btn-sm" onClick={this.onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button type="button" className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}
export default EmployersListItem