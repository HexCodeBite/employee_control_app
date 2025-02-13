// import './employees-add-form.css'
import './employees-add-form.scss'
import { Component } from 'react'

class EmployeesAddForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            salary: '',
        }
    }
    
    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name,
              salary = this.state.salary;

        if(name.length > 2 && salary > 1){
            this.props.onAdd(name,salary);
            this.setState({
                name: '',
                salary: ''
            })
        } else {
            alert("Минимальная длина имени 3 символа, а З/П > 1 $")
        }
        
    }
    
    render() {
        const {name, salary} = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.onSubmit} className='add-form d-flex'>
                    <input 
                        type="text" 
                        className='form-control new-post-label'
                        placeholder='Имя сотрудника'
                        value={name}
                        name='name'
                        onChange={this.onValueChange}/>
                    <input 
                        type="number" 
                        className='form-control new-post-label'
                        placeholder='З/П в $'
                        value={salary}
                        name='salary'
                        onChange={this.onValueChange}/>
                    <button type='submit' className='btn btn-outline-light'>Добавить</button>
                </form>
            </div>
        )
    }
}
export default EmployeesAddForm