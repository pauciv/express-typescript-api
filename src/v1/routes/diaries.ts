import express from 'express' // ES Modules, pero se compila en commonjs
const router = express.Router()

router
  .get('/', (_req, res) => {
    res.send('Fetching all entry diaries')
  })
  .post('/', (_req, res) => {
    res.send('Saving a diary')
  })

export default router
