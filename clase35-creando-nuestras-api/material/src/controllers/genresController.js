const db = require('../database/models');
const sequelize = db.sequelize;


const genresController = {
    'list': (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.render('genresList.ejs', {genres})
            })
    },
    'list2': async(req, res) => {

        try {

            const genres = await db.Genre.findAll();
            const response = {
                meta: {
                    status: 200,
                    total: genres.length,
                    url: 'api/genres'
                },
                data: genres
            }
            res.json(response); 
            
        } catch (error) {
            console.log(error);
            
        }

    },
    'detail': (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                res.render('genresDetail.ejs', {genre});
            });
    }

}

module.exports = genresController;