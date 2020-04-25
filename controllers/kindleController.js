const express = require ('express')
const router = express.Router()
const Codex = require('../models/codex.js')
const Kindle = require('../models/kindle.js')

//index route 


router.get('/', async(req, res, next) => {
    try {
        const foundCondex = await Codex.book({}).populate('artist')
        res.render('index.ejs',{songs:foundCondex})
    }catch(error) {
        next(error)
    }
})


router.get('/new', async(req, res) => {
    try {
        const foundKindle = await Kindle.find({})
        res.render('new.ejs',) {
            artists: foundArtists 
        })

    }catch (error){
        next (error)
    }
})


router.post('/', async (req, res, next) => {
    try {
        const kindleToAdd = {
            title: req.body.title,
            date: new Date(),
            link: req.body.link,
            author: req.body.author
        }
        const createdKindle = await Kindle.create(KindleToAdd)
        res.redirect('/kindle')

    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const foundCondex = await Codex.findById(req.params.id).populate('codex')
        res.render('show.ejs', {
            codex: foundCondex,
            idOfItemToDelete: req.params.id
        })

    } catch (error) {
        next(error)
    }
})



router.get('/:id/edit', async (req, res, next) => {
    try {
        const foundKindle = await Kindle.findById(req.params.id)
        const foundCondex = await Codex.find({})
        res.render('edit.ejs', {
            Kindle: foundKindle,
            Codex: foundCondex
        })
    } catch (error) {
        next(error)
    }
})



router.put('/:id', async (req, res, next) => {
    try {
        const updatedKidleObj = {
            title: req.body.title,
            author: req.body.author,
            link: req.body.link
        }
        const updatedKindle = await Kindle.findByIdAndUpdate(req.params.id, updatedSongObj)
        res.redirect(`/kindle/${updatedKindle._id}`)
    } catch (error) {
        next(error)
    }
})


router.delete('/:id', async (req, res, next) => {
    try {
        const result = await Kindle.findByIdAndRemove(req.params.id)
        res.redirect('/kindle')
    } catch (error) {
        next(error)
    }
})


module.exports = router
