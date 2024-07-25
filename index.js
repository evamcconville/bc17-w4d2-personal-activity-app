import express from 'express'
const app = express()
const port = 3000
import helmet from 'helmet'

app.use(helmet())

//res.send('Say hello to my little friend...')
//console.log('')


app.get('/mafiaActivities/:id', (req, res) => {
    try {
    res.status(200).json({
    "payload": mafiaActivity.id,
    "success": true
    })
}   catch (error){
      res.status(400).json({
      "payload": null,
      "error": true,
      //"success"; false
    })
  }
  
})

app.listen(port, () => {
  console.log(`mafiaApp listening on port ${port}`)
})
