//module events required
//EventEmitter acts as event observer
var ev=require('events');
var eemit=new ev.EventEmitter();
var cHandler=function()
	{console.log("connection achieved");
	eemit.emit('data receive');}
//on implies event binding
eemit.on('connection',cHandler);
eemit.on('data receive',function(){console.log('data receive event captured and taken care of');});
//emit implies throwing an event
eemit.emit('connection');