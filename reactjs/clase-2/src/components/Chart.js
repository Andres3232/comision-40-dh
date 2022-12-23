import React from 'react'
import ChartRow from './ChartRow'

const Chart = () => {

    let tableRowsData = [
        {
            Title: 'Billy Elliot ',
            Length: '123',
            Rating: '5',
            Categories: ['Drama', 'Comedia','Musical'],
            Awards: 2
        },
        {
            Title: 'Alicia en el país de las maravillas',
            Length: '142',
            Rating: '4.8',
            Categories: ['Drama', 'Acción', 'Comedia'],
            Awards: 3
        },
        {
            Title: 'Alicia en el país de las maravillas',
            Length: '142',
            Rating: '4.8',
            Categories: ['Drama', 'Acción', 'Comedia'],
            Awards: 3
        },
        {
            Title: 'Alicia en el país de las maravillas',
            Length: '142',
            Rating: '4.8',
            Categories: ['Drama', 'Acción', 'Comedia'],
            Awards: 3
        },

    ]
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                            <thead>
                                <tr>
                                    <th class="table-primary">Título</th>
                                    <th class="table-primary">Duración</th>
                                    <th class="table-primary">Rating</th>
                                    <th class="table-primary">Género</th>
                                    <th class="table-primary">Premios</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th  class="table-danger">Título</th>
                                    <th class="table-danger">Duración</th>
                                    <th class="table-danger">Rating</th>
                                    <th class="table-danger">Género</th>
                                    <th class="table-danger">Premios</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                
                                {
                                    tableRowsData.map((row,i) => {
                                     return  <ChartRow data = { row } key={i}/>     
                                    })
                                } 

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chart