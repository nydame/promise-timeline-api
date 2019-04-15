# promise-timeline-api
##Generate an API for Promise Timeline to consume in a few simple steps!
###Installation
 - 1  From your terminal, run ```git clone git@github.com:nydame/promise-timeline-api```
 - 2 Navigate to the resulting **promise-timeline-api/** folder
 - 3 Run ```yarn install``` and wait for packages to be installed into **node_modules/**
 - 4 Run ```yarn run dev```

 To stop the server at any time, hit Ctl+C. To restart, just repeat the last step.

####Troubleshooting
If port 8000 is already in use, you will need to edit the **server.js** file by changing the value of the port from 8000 to the number of an available port. Also, if you do not have yarn installed, you can either use the equivalent npm commands or [install yarn](https://yarnpkg.com/lang/en/docs/install) 
###Usage
The best way to learn how to use this API is to examine the **api_routes.js** file in the **routes/** folder. Here's one example: the URL ```http://localhost:8000/events-reminders``` will send a list of all events and reminders in the database.
