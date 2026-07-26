import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({ message: 'Server berjalan!' })
})

app.listen(3000, () => {
    console.log('Server berjalan diport 3000 ')
})