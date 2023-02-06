import express from 'express' // usamos ES Modules, pero se compila en commonjs
import * as diaryServices from '../../services/diaryServices'
import toNewDiaryEntry from '../../utils'

const router = express.Router()

router
  .get('/', (_req, res) => {
    res.send(diaryServices.getAllEntriesWithoutSensitiveInfo())
  })
  .get('/:id', (req, res) => {
    const entry = diaryServices.getOneEntrieWithoutSensitiveInfo(Number(req.params.id)) // unary operator (+req.params.id)

    return (entry != null)
      ? res.send(entry)
      : res.sendStatus(404)
  })
  .post('/', (req, res) => {
    try {
      const newDiaryEntry = toNewDiaryEntry(req.body)

      const addedDiaryEntry = diaryServices.addNewEntry(newDiaryEntry)

      res.send(addedDiaryEntry)
    } catch (err) {
      res.status(400).send(err.message)
    }
  })

export default router
