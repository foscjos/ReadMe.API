# ReadMe.API
Node API for ReadMe app. Please refer to our [project](https://github.com/foscjos/ReadMe.UI/projects/1) for a current list of in-progress tasks.

To run this server, run the commands 'npm install' and then 'npm start'. The server runs on port 3001 by default. This also assumes that you already have Node.js and NPM installed. 

If you want to contribute to this project, please create a fork of the repo, and commit to our main branch. Pull requests will be reviewed on a regular basis.


# Things you will need to do to run locally: 

Run a general npm install

Run npm install mongodb --save (may not need this step if I set up packages correctly)

npm install mongoose --save (again, may not need if I set things up correctly)

docker run --name mongodb -d -p 27017:27017 -v C:\Github\data\mongodb mongo (YOU MAY NEED TO CHANGE THE PATH LISTED - I JUST DUMPED THIS WHERE I WANTED IT ON MY BOX)

See if you can hit the healthcheck endpoint

Pull  in my environment variable since that cannot be checked into git (text or email me for this)

For now we will use postman to test api routes, but once we build out the UI we will need to do this less. I've got some postman requests hanging around locally, so reach out for a starting point on this. 

Docker container was set up using this guide: https://www.mongodb.com/compatibility/docker
