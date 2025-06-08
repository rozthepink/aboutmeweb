const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout');
app.set('layout extractScripts', true);
app.set('layout extractStyles', true);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'My Mirror',
        showBackButton: false 
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: 'About Me',
        showBackButton: true 
    });
});

app.get('/hobbies', (req, res) => {
    res.render('hobbies', { 
        title: 'My Hobbies',
        showBackButton: true 
    });
});

app.get('/knowledge', (req, res) => {
    res.render('knowledge', { 
        title: 'Knowledge',
        showBackButton: true 
    });
});

app.get('/interests', (req, res) => {
    res.render('interests', { 
        title: 'My Interests',
        showBackButton: true 
    });
});

app.get('/misc', (req, res) => {
    res.render('misc', { 
        title: 'Miscellaneous',
        showBackButton: true 
    });
});

// Catch-all 404 route
app.use((req, res) => {
    res.status(404).render('notfound', { title: 'Not Found', showBackButton: false });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 