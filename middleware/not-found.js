const notFound = (req,res) => res.status(404).json({msg:'Rout does not exist'})



module.exports = notFound