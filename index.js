import express from 'express'
const app = express()
const port = 3000
import helmet from 'helmet'

app.use(helmet())

app.get('/', (req, res) => {
  res.send('Say hello to my little friend...')
  console.log('')
})

app.listen(port, () => {
  console.log(`mafiaApp listening on port ${port}`)
})

app.get('/astronauts', async (request, response) => {
  try {
  const astronauts = await getAstronauts();
  response.status(200).json({
    "success": true,
    "payload": astronauts,
  });
  } catch (erroooorr); {
  response.status(400).json({
    "success": false,
    "payload": null,
  });
}
})