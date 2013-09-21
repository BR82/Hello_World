var express 	= require('express'),
    app 		= express();

app.use(express.favicon()); 																	// отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.bodyParser()); 																	// стандартный модуль, для парсинга JSON в запросах
app.use(express.methodOverride()); 																// поддержка put и delete

app.get('/', function (req, res) {
    res.send('API version: 0.6.1 beta');
});

app.use(function(req, res, next){
    res.status(404);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.send({ error: err.message });
    return;
});

var port = process.env.PORT || 8085;
app.listen(port , function(){
    console.log('Express server listening on port ' + port);
});