import {Router} from 'express';
import pool from '../config/db.js';
import authMiddleware from '../middleware/auth.js';

const  router = Router();

router.get('/', authMiddleware, async (req,res)=>{
    const result = await pool.query(
        'SELECT * FROM jobs WHERE user_id = $1',[req.user.id]
    )
    res.json(result.rows)
})

router.post('/', authMiddleware, async (req,res)=>{
    const {company, position, applied_date, deadline, status, source, job_url, notes} = req.body;
    const result = await pool.query(
        'INSERT INTO jobs (user_id, company, position, applied_date, deadline, status, source, job_url, notes) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
        [req.user.id, company, position, applied_date, deadline, status, source, job_url, notes]
    )

    res.status(201).json(result.rows[0])
})

router.patch('/:id', authMiddleware, async (req,res)=>{
    const {id}= req.params;
    const {company, position, applied_date, deadline, status, source, job_url, notes} = req.body;

    const result = await pool.query('UPDATE jobs SET company=$1, position=$2, applied_date=$3, deadline=$4, status=$5, source=$6, job_url=$7, notes=$8 WHERE id=$9 AND user_id=$10 RETURNING *',
    [company, position, applied_date, deadline, status, source, job_url, notes, id, req.user.id]
    )

    if (result.rows.length === 0){
        return res.status(404).json({message:'Job not found'})
    }

    res.json (result.rows[0])
})

router.delete('/:id', authMiddleware, async (req,res)=>{
    const {id} = req.params;
    const result = await pool.query('DELETE FROM jobs WHERE id=$1 AND user_id=$2 RETURNING *',
        [id, req.user.id]
    )

    if (result.rows.length === 0){
        return res.status(404).json({message:'Job not found'})
    }

    res.json(result.rows[0])
})

export default router;