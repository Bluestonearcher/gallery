const express = require('express')
const fs = require('fs')
const appController = express.Router()
const hbs = require('express-handlebars')


// const gallery = require('/gallery')
// const blog = require('/blog')
// const store = require('/store')
// const commissions = require('/commissions')
// const artistInfo = require('/info')
// const contact = require('/contact')

appController.get("/", function( req, res ) {

    res.render('index')
})

// appController.get("/", function( req, res ) {
//
//     res.render(
//         fs.readdir('./images/unicorn_rough', function (err, files) {
//     for (var i=0; i < files.length; i++); {
//     if (files[i] === '.DS_Store') {
//         files.sort(0);
//     }}
//     console.log( files )
// })
//     )
// })

appController.post("/", function( req, res ) {

    res.render('index')
})

appController.get("/gallery", function( req, res ) {

    res.redirect('http://bluestonearcher.deviantart.com')
})

appController.post("/gallery", function( req, res ) {

    res.redirect('http://bluestonearcher.deviantart.com')
})

appController.get("/blog", function( req, res ) {

    res.redirect('http://www.bluestonearcher.com')
})

appController.post("/blog", function( req, res ) {

    res.redirect('http://www.bluestonearcher.com')
})

appController.get("/commissions", function( req, res ) {

    res.render('commissions')
})

appController.post("/commissions", function( req, res ) {

    res.render('commissions')
})

appController.get("/artistInfo", function( req, res ) {

    res.render('artistInfo')
})

appController.post("/artistInfo", function( req, res ) {

    res.render('artistInfo')
})

appController.get("/contact", function( req, res ) {

    res.render('contact')
})

appController.post("/contact", function( req, res ) {

    res.render('contact')
})
// appController.get('/', ( req, res ) => {
//   Artist.find({}).limit(6).exec( ( err, artists ) => {
//     res.render('index', { artists })
//   })
// })

// appController.get('/gallery', ( req, res ) => {
//     res.render('gallery')
// })

// appController.post('/signup', ( req, res ) => {
//
//     User.register(
//     new User({
//         username: req.body.username
//     }),
//     req.body.password,
//     ( err, account ) => {
//     return res.render('signup', { account: account})
// })
//
// console.log ( account )
// passport.authenticate('local')( req, res, () => {
//     res.direct('/')
// })
//
// } )
//
//
// appController.get('/login',( req, res ) => {
//     res.render('login', { user: req.user})
// })
// appController.post('/login', passport.authenticate('local'), ( req, res ) => {
//     res.redirect('/')
// }) (req, res, next) => {})
//
// appController.get('/logout', ( req, res ) => {
//     req.logout()
// res.redirect('/')
//
// })



module.exports = appController