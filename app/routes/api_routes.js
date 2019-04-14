module.exports = function(app, db) {

    app.get('/events', (req, res) => {
        res.json(db.events.sort(compareObjDate));
        res.end();
    });

    app.get("/reminders", (req, res) => {
      res.json(db.reminders.sort(compareObjDate));
      res.end();
    });

    app.get("/events-reminders", (req, res) => {
        const eventsAndReminders = db.events.concat(db.reminders);
        // res.json(eventsAndReminders.sort((a,b) => a.type < b.type ));
        res.json(eventsAndReminders.sort(compareObjDate);
        res.end();
    });

    app.get("/clients", (req, res) => {
      res.json(db.clients);
      res.end();
    });
    
    app.post('/event/court', (req, res) => {
        const {clientId, date, attendable, attended} = req.body;
        if (clientId && date && attendable && attended) {
            db.events.push(Object.assign(req.body, {type: 'court'}));
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    });
    
    app.post('/event/case', (req, res) => {
        const {clientId, date, attendable, attended} = req.body;
        if (clientId && date && attendable && attended) {
            db.events.push(Object.assign(req.body, {type: 'case'}));
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    });
    
    app.post('/event/info', (req, res) => {
        const {clientId, date} = req.body;
        if (clientId && date && attendable && attended) {
            db.events.push(Object.assign(req.body, {type: 'info'}));
            res.status(200).end();
        } else {
            res.status(500).end();
        }
    });

    function compareObjDate(a, b) {
        if (parseInt(a.date) > parseInt(b.date)) return 1;
        if (parseInt(a.date) < parseInt(b.date)) return -1;
        return 0;
    }
};