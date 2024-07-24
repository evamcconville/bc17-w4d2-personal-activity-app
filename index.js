import express from 'express'
const app = express()
const port = 3000
import helmet from 'helmet'

app.use(helmet,({X-Powered-by: false}))

app.get('/', (req, res) => {
  res.send('Say hello to my little friend...')
  console.log('')
})

app.listen(port, () => {
  console.log(`mafiaApp listening on port ${port}`)
})

