const db = require('../database/models');

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'detail2':async (req, res) => {
        try {
            const movieId = req.params.id;
            const movie = await  db.Movie.findByPk(movieId,{include: ['genre','actors']}) //{include:{all:true}}
            //return res.send(movie)
            res.render('moviesDetail.ejs', {movie});

        } catch (error) {
            res.send(error)
        }
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add:  async (req, res) => {

        try {
            const genres = await db.Genre.findAll()
            
            return res.render('moviesAdd.ejs',{genres});        
        } catch (error) {
            res.send(error)
        }

    },
    add2:  (req,res) => {
       db.Genre.findAll()
        .then((genres)=>{
            return res.render('moviesAdd.ejs',{genres});        
        })
        .catch((error)=>{
            res.send(error)

        })
    },
    
    create: function (req, res) {
        db.Movie
        .create(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            }
        )
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    edit: (req, res)=> {
        let movieId = req.params.id;
        let promMovies = db.Movie.findByPk(movieId,{include: ['genre']});
        let promGenres = db.Genre.findAll();

        Promise
        .all([promMovies, promGenres])
        .then(([Movie, allGenres]) => {
            return res.render( 'moviesEdit', { Movie, allGenres})
        })
        .catch(error => res.send(error))     
    },
    edit2: async (req, res)=> {
        try {
            
            let movieId = req.params.id;
            let promMovies = db.Movie.findByPk(movieId,{include: ['genre']});
            let promGenres = db.Genre.findAll();

           const [Movie,allGenres] = await Promise.all([promMovies,promGenres])

           return res.render( 'moviesEdit', { Movie, allGenres})

            
        } catch (error) {
            res.send(error)
            
        }
    },
    update:  (req,res)=> {
        let movieId = req.params.id;
        db.Movie
        .update(
            {
                title: req.body.title,
                rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
                length: req.body.length,
                genre_id: req.body.genre_id
            },
            {
                where: {id: movieId}
            })
        .then(()=> {
            return res.redirect('/movies')})            
        .catch(error => res.send(error))
    },
    update2: async (req,res)=> {
        try {
           let movieId = req.params.id;
           const movieUpdate =   {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        }
        await db.Movie.update( movieUpdate, {where: {id: movieId}} )

        return res.redirect('/movies')           
           
       } catch (error) {
            res.send(error) 
       }
     
    },
    delete:  (req, res)=> {
        let movieId = req.params.id;
        db.Movie
        .findByPk(movieId)
        .then(Movie => {
            return res.render('moviesDelete', {Movie})})
        .catch(error => res.send(error))
    },
    delete2: async (req, res) => {
        try {
            let movieId = req.params.id;
            const Movie = await db.Movie.findByPk(movieId)
            return res.render('moviesDelete', {Movie})

        } catch (error) {
            res.send(error) 
            
        }
    },
    destroy:  (req, res) => {
        let movieId = req.params.id;
        db.Movie
        .destroy({where: {id: movieId}, force: true}) // force: true es para asegurar que se ejecute la acción
        .then(()=>{
            return res.redirect('/movies')})
        .catch(error => res.send(error)) 
    },
    destroy2: async (req, res) =>{
        try {
            let movieId = req.params.id;
            await db.Movie.destroy({where: {id: movieId}, force: true}  )
            return res.redirect('/movies')

        } catch (error) {
            res.send(error) 
            
        }
    }

}

module.exports = moviesController;