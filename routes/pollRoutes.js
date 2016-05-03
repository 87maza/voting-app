module.exports = function(app, passport) {

    app.get('/listPolls', isLoggedIn, function (req, res) {
        res.render('polls/listPolls.ejs', { user : req.user})
    });

    app.get('/createPolls', isLoggedIn, function (req, res) {
        res.render('polls/createPolls.ejs', { user : req.user})
    });

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }
};

