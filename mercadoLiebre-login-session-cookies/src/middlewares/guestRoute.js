module.exports = (req, res, next) => {
    // Si existe el usuario en session
    if (req.session.user) {
        res.redirect('/users/profile');
    } else {
        next();
    }
}