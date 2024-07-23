import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Say hello to my little friend...')
  console.log('')
})

app.listen(port, () => {
  console.log(`mafiaApp listening on port ${port}`)
})