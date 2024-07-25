import express from 'express'
const app = express()
const port = 3000
import helmet from 'helmet'

app.use(helmet())

res.send('Say hello to my little friend...')
console.log('')


app.get('/mafiaActivities/:id', (req, res) => {
  try {
    res.status(200)
    "payload": mafiaActivity.id,
    "sucess": true
  } catch (error) {
    res.status(400)
    "payload": null
    "error": true,
//    "sucess": false
  }
})

app.listen(port, () => {
  console.log(`mafiaApp listening on port ${port}`)
})
