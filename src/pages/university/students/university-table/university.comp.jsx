import React from 'react';
import CoursesTable from '../courses-table/courses-table.comp';
import StudentsRow from '../students-row/students-row.comp';
import StudentsTable from '../students-table/students-table.comp';

import './university.style.css'

const UniversityTable = () => {
    return (
    <div className="university-table">
        <p className="titulo1">University</p>
        <CoursesTable courseName="Programming 1"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"James Castillo",
            grade:3.2,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Camilo Gutierrez",
            grade:3.2,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Camila Cifuentes",
            grade:3.4,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Daniela Castro",
            grade:4.2,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Alberto Noreña",
            grade:1.5,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Carolina Rios",
            grade:3.4,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Valentina Fuelpaz",
            grade:2.5,
            gender:"Female",
        }}/>
        <CoursesTable courseName="Programming 2"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Sergio Gomez",
            grade:4.5,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Maricel Rodriguez",
            grade:2.6,
            gender:"Female",
        }}/>
         <StudentsRow student={{
            name:"Sebastian Salazar",
            grade:2.7,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Tomas Martinez",
            grade:4.4,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Julian Piedraita",
            grade:1.2,
            gender:"Male",
        }}/>
        <StudentsRow student={{
            name:"Luisa Pelaez",
            grade:3.9,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Laura Ocampo",
            grade:2.6,
            gender:"Female",
        }}/>
        
        <CoursesTable courseName="Databases 1"/>
        <StudentsTable tipeDate={{
            name:"Name",
            grade:"Grade",
            gender:"Gender",
        }}/>
        <StudentsRow student={{
            name:"Alejandro Mejia",
            grade:3.3,
            gender:"Male",
        }}/>
         <StudentsRow student={{
            name:"Claudia Hernandes",
            grade:1.6,
            gender:"Female",
        }}/>
         <StudentsRow student={{
            name:"Estefania Guapacha",
            grade:3.1,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Tatiana Solarte",
            grade:3.8,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Alejandra Uribe",
            grade:2.9,
            gender:"Female",
        }}/>
        <StudentsRow student={{
            name:"Oscar Gonzales",
            grade:3.2,
            gender:"Male",
        }}/>
     
    </div>
    )
}

export default UniversityTable;