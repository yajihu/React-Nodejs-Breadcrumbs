

const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.send([{name:'root', type:"dir"},]);
  });
  app.get('/root', (req, res) => {
    res.send([{name:'home', type:"dir"},]);
  });
  app.get('/root/home', (req, res) => {
    res.send([{name:'myname', type:"dir"},]);
  });
  app.get('/root/home/myname', (req, res) => {
    res.send([{name:'projects', type:"dir"},{name:'filea.txt', type:"dir"},{name:'fileb.txt', type:"dir"}]);
  });
  app.get('/root/home/myname/filea.txt', (req, res) => {
    res.send([{name:'THIS IS FILE: filea.txt', type:"file"},]);
  });
  app.get('/root/home/myname/fileb.txt', (req, res) => {
    res.send([{name:'THIS IS FILE: fileb.txt', type:"file"},]);
  });
  app.get('/root/home/myname/projects', (req, res) => {
    res.send([{name:'mysupersecretproject', type:"dir"},]);
  });
  app.get('/root/home/myname/projects/mysupersecretproject', (req, res) => {
    res.send([{name:'mysupersecretfile.txt', type:"dir"},]);
  });
  
  app.get('/root/home/myname/projects/mysupersecretproject/mysupersecretfile.txt', (req, res) => {
    res.send([{name:'THIS IS FILE: mysupersecretfile.txt', type:"file"},]);
  });
  
  // run our conditions route module here to complete the wire up
  //conditionRoutes(app, fs);
};

// this line is unchanged
module.exports = appRouter;