const mainControllers= {
    home: (req, res)=> res.send('Route for Home View from controler'),
    contact: (req, res)=> res.send('Route for Contact View'),
    about: (req, res)=> res.send('Route for about View'),
    faqs: (req, res)=> res.send('Route for Faqs View'),
}

module.exports= mainControllers;