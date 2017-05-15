exports.about = function(req, res) {
    res.render('default1', {
        title: 'About',
        users: ['Ray', 'Ryan']
    });
}