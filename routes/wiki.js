const express = require('express')
const { Page } = require("../models");
const router = express.Router()
const { addPage } = require('../views')
const layout = require('../views/layout')

router.get('/', (req, res, next) => {
  res.send('wikiwiki')
})

router.post('/', async (req, res, next) => {
  const page = new Page({
    name: req.body.name,
    email: req.body.email,
    title: req.body.title,
    content: req.body.content,
    status: req.body.status
  })
  try {
    await page.save();
    res.redirect(`/${page.slug}`)
  } catch (error) { next(error) }
})


router.get('/add', async (req, res, next) => {
  res.send(addPage())
  await Page.save()
  res.redirect(`/:${slug}`)
})

router.get('/:slug', (req, res, next) => {
  res.send(`hit dynamic route at ${req.params.slug}`);
});















module.exports = router
