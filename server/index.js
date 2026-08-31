import express from 'express'
import pool from './config/db.js'
import authRouter from './routes/auth.js'

const app = express()
app.use(express.json())

app.use('/auth', authRouter)

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.log('Database connection failed:', err)
    } else {
        console.log('Database connected at:', res.rows[0].now)
    }
})


app.get('/', (req, res) => {
    res.json({ message: 'Server berjalan!' })
})

app.listen(3000, () => {
    console.log('Server berjalan diport 3000 ')
})