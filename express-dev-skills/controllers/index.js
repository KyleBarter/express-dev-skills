function index(req, res, next){
    res.render('index', {title: 'Skills'})
}

module.exports = {
    index
}