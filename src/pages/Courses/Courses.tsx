import React from 'react'
import './Courses.scss'
import Searchbar from '../../components/Searchbar/Searchbar.view'
import Table from '../../components/FormTable/Table.view'

const Courses: React.FC = () => {
    return (
        <div>
            <h4>Courses</h4>
            <Searchbar/>
            <Table id="ID" title="Title" description='Description' onDelete={function (): void {
                throw new Error('Function not implemented.')
            } } onEdit={function (): void {
                throw new Error('Function not implemented.')
            } }/>
        </div>
    )
}

export default Courses
