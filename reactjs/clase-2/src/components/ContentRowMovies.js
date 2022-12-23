import React from 'react'
import SmallCart from './SmallCart'

function ContentRowMovies() {

    const moviesInDb = {
        titulo: 'Movies in Data Base',
        color: 'primary',
        cifra: 21,
        icono: 'fa-film' ,
    }

    const totalAwards = {
        titulo: 'Total awards',
        color: 'success',
        cifra: 79,
        icono: 'fa-award' ,
    }

    const actors = {
        titulo: 'Actors quantity',
        color: 'warning',
        cifra: 49,
        icono: 'fa-user' ,
    }
    const danger = {
        titulo: 'Actors quantity',
        color: 'danger',
        cifra: 49,
        icono: 'fa-user' ,
    }

    const cardProps = [ moviesInDb, totalAwards, actors,danger]


    return (
        <>
            {/*<!-- Content Row Movies-->*/}
            <div className="row">

                {
                    cardProps.map( (cardProp, i ) => {
                        
                       return <SmallCart {...cardProp}  key={i} />
                            //data={cardProp}
                    } )
                    
                }

                {/* 
                <SmallCart { ...moviesInDb }/>
                <SmallCart { ...totalAwards }/>
                <SmallCart { ...actors }/> 
                <SmallCart { ...danger }/>
                 */}

            </div>
            {/*<!-- End movies in Data Base -->*/}
        </>
    )

}

export default ContentRowMovies