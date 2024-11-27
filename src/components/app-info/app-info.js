import './app-info.css'

const AppInfo = ({totalEmpl, totalPrem}) => {
    return (
        <div className='app-info'>
            <h1>Учёт сотрудников в компании "X".</h1>
            <h2>Общее число сотрудников: {totalEmpl}</h2>
            <h2>Премию получат: {totalPrem}</h2>
        </div>
    )
}

export default AppInfo