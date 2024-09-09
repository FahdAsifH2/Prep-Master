const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));




// Routes for EJS views
app.get('/', (req, res) => {
  console.log('Home route accessed');
  res.render('index');
});

app.get('/about', (req, res) => {
  console.log('About route accessed');
  res.render('about');
});

app.get('/contact', (req, res) => {
  console.log('Contact route accessed');
  res.render('contact');
});
app.get("/index",(req,res)=>
{
 res.render("index") 
})
app.get('/element', (req, res) => 
{
  console.log('Element route accessed');
  res.render('elements');
});
//routes for news
app.get("/news",(res,req)=>
{
  res.render("news")
})
// Route for rendering register.ejs
app.get("/register", (req, res) => {
  console.log('Register route accessed');
  res.render('register'); // This will render views/register.ejs
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
