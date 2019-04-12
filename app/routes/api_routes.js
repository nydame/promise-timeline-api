module.exports = function(app, db) {
    app.get('/events', (req, res) => {
        res.send('Here are all the events');
    });
    app.post('/event/court', (req,res) => {
        res.send('new court date');
    });
    app.post('/event/case', (req, res) => {
        res.send('new appointment with case manager')
    });
    app.post('/event/info', (req, res) => {
        res.send('new client info update');
    });
};