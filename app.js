var express 	= require('express'),
    app 		= express();

app.use(express.favicon()); 																	// отдаем стандартную фавиконку, можем здесь же свою задать
app.use(express.bodyParser()); 																	// стандартный модуль, для парсинга JSON в запросах
app.use(express.methodOverride()); 																// поддержка put и delete
app.get('/api', function (req, res) {
    res.send('API version: 0.6.1 beta');
});

app.use(function(req, res, next){
    res.status(404);
    //log.debug('Not found URL: %s',req.url);
    res.send({ error: 'Not found' });
    return;
});

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    //log.error('Internal error(%d): %s',res.statusCode,err.message);
    res.send({ error: err.message });
    return;
});

app.listen(8085, function(){
    //log.info('Express server listening on port ' + 8085);
});