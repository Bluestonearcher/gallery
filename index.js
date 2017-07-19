const express = require ('express')
const hbs = require('express-handlebars')
const app = express()
const fs = require('fs')
const bodyParser = require('body-parser')
const home = require('./views/index.js')
// const gallery = require('./views/gallery.handlebars')
// const blog = require('/blog')
// const commissions = require('/commissions')
// const artistInfo = require('/artistInfo')
// const contact = require('/contact')
// if mongoose is needed for comments : const mongoose = require('mongoose')
// then the mongoose db location


app.use(bodyParser.urlencoded({ extended: true }))

app.use( express.static('public') )

//app.get('/', (req, res ) => {res.send ('hello world')})
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.use('/', home)
// app.use('/gallery')
// app.use('/blog')
// app.use('/commissions', commissions)
// app.use('/artistInfo', artistInfo)
// app.use('/contact', contact)



// app.use('/', (req, res) => {
//     res.send( "hello world")
// })

// const fs = require('mz/fs') // this one worked
//fs.readdir('./images/chow_rough').then(listing => console.log(listing))
//     .catch(err => console.error(err));
// Woohoo! Above works and console logs the folder! Finally!)

// const fs = require('fs-promise') // this one didn't work
// fs.walk('./images/chow_rough').then(listing => listing.forEach(file => console.log(file.path)))
//     .catch(err => console.error(err));
// .walk is no longer supported, oddly enough makes the .catch part error out instead

// nope
// const fs = require ('fs')
// const path = require ('path')
// let folder = []
//
// fs.readdirSync('./images/chow_rough')
//     .filter((file => fs.lstatSync(path.join(folder, file)).isfile()));



// fs.readdir('./images/chow_rough', function (err, files) {
//     for (var i=0; i < files.length; i++); {
//     if (files[i] === '.DS_Store') {
//         files.sort(0);
//     }}
//     console.log( files )
// })

//div maker from PixArt
// let canvas = document.querySelector('#canvas')
//
// for (let i = 0; i < 2500; i++) {
//     let div = document.createElement('div')
//     div.classList.add('square')
//     // div.addEventListener("mouseenter", paintSquare) // we can add the event listener here, if we want
//     canvas.appendChild( div )
// }


// fs.readdir('./images/', function (err, files) {
//     console.log( files )
// })

// Unnecessary .DS_Store file in the directory/array... trying to remove
// fs.readdir('./images/', function (err, files) {
//     for (var i=0; i < files.length; i++); {
//     if (files[i] === '.DS_Store') {
//         files.shift(0);
//     }}
//     console.log( files )
// })


//trying to push everything but DS_Stores into an array
// let files = []
// let i = 0
//
// fs.readdir('./images/', function (err, files) {
//     if (files.length >= 1) {
//         files.push( files )
//         files.return
//     }
// })
// console.log( files )


app.listen(3000)
