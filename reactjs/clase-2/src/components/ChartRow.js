import React from 'react'

const ChartRow = ({data}) => {
    return (
        <>
            <tr>
                <td>{data.Title}</td>
                <td>{data.Length}</td>
                <td>{data.Rating}</td>
                <td>
                    <ul>
                        {
                            data.Categories.map((category, i) =>
                            
                                <li key={`category ${i}`}>{category}</li>)
                                
                        }
                    </ul>
                </td>
                <td>{data.Awards}</td>
            </tr>

        </>
    )
}

export default ChartRow