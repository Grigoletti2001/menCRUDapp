const express = require('express')
const router = express.Router()
const Codex = require('../models/codex.js')
const Kindle = require('../models/kindle.js')

router.get('/', async (req, res) => {
    try {
        const foundCodex = await Codex.find({})
        res.render("codex/index.ejs", {
            codex: foundCodex
        })
    } catch (error) {
        next(error)
    }
})


router.get('/new', (req, res) => {
    try {
        res.render('codex/new.ejs')
    } catch (error) {
        next(error)
    }
})


router.post('/', async (req, res, next) => {
    try {
        const createdCodex = await Codex.create(req.body)
        res.redirect('/codex')
    } catch (error) {
        next(error)
    }


    router.get("/:id", async (req, res, next) => {
        try {
            const foundCodex = await Codex.findById(req.params.id)
            const foundKindle = await Kindle.find({ artist: req.params.id })
            res.render('codex/show.ejs', { title: foundTitle, author: foundAuthor })
        } catch (error) {
            next(error)
        }
    })


    router.get("/:id/edit", async (req, res, next) => {
        try {
            const foundCodex = await Codex.findById(req.params.id)
            res.render("codex/edit.ejs", {
                codex: foundCodex
            })
        } catch (error) {
            next(error)
        }
    })


    router.put('/:id', async (req, res, next) => {
        try {
            const updatedCodex = await Codex.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`/codex/${updatedCodex._id}`)
        } catch (error) {
            next(error)
        }
    })



    router.delete('/:id', async (req, res, next) => {
        try {
            const deletedKindle = await Kindle.remove({ artist: req.params.id })
            const deletedCodex = await Codex.findByIdAndRemove(req.params.id)
            res.redirect('/codex')
        } catch (error) {
            next(error)
        }
    })

module.exports = router
