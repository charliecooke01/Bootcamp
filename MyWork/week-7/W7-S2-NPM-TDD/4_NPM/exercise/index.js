   const figlet = require('figlet');

   figlet('Charlie Cooke', function(err, data) {
   if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       return;
   }
   console.log(data);
   });