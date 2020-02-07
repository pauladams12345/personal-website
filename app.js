var express = require('express');
var handlebars = require('express-handlebars');
var helmet = require('helmet');

var app = express();

// Set handlebars as view engine, allow omission of .handlebars extension
app.engine('handlebars', handlebars({
  defaultLayout: 'main'//,
  //helpers: require('./helpers/handlebarsHelpers.js')
}));
app.set('view engine', 'handlebars');

// Set up access to public folder
app.use(express.static(__dirname + '/public'));

// Set security-related http headers
app.use(helmet());

app.use(require('./routes/index.js'));

// Handle 404 error
app.use(function(req,res){
  res.status(404);
  res.render('404', {css: ['main.css']});
});

// Handle 500 error
app.use(function(err,req,res,next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500');
});

// Start server
app.listen(process.env.PORT || 3000, function(){
  console.log("Server started for Paul's personal website.");
});