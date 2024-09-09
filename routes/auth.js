const express = require('express');
const router = express.Router();

// Define specific routes for each page
router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

router.get('/elements', (req, res) => {
    res.render('elements');
});

router.get('/gallery', (req, res) => {
    res.render('gallery');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/news', (req, res) => {
    res.render('news');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/staff', (req, res) => {
    res.render('staff');
});

module.exports = router; // Export the router to be used in other files
