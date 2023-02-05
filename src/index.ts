import express from 'express'
import diaryRouter from './v1/routes/diaries'

const app = express()
app.use(express.json()) // transforma req.body en json

const PORT = 4000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here!')
  res.send('pong')
})

app.use('/api/v1/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
