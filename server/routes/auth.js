import {Router} from 'express';
import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = Router();

router.post('/register',async(req,res)=>{
    const {fullname,email,password} = req.body;

    const exsistingUser = await pool.query(
        'SELECT * FROM users WHERE email = $1',[email]
    )

    if (exsistingUser.rows.length>0){
        return res.status(400).json({message:'User already exists'})
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = await pool.query(
        'INSERT INTO users (fullname,email,password) VALUES ($1,$2,$3) RETURNING id, fullname,email',
        [fullname,email,hashedPassword]
    )

    res.status(201).json({
        message:`User ${fullname} registered with email ${email}`,
        user:newUser.rows[0]
    })

})

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    const result =  await pool.query(
        'SELECT * FROM users WHERE email = $1',[email]
    )

    if(result.rows.length===0){
        return res.status(400).json({message:'Invalid credentials'})
    }

    const isMatch = await bcrypt.compare(password,result.rows[0].password)

    if(isMatch){
        const token = jwt.sign(
            {id:result.rows[0].id, email:result.rows[0].email}, 
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        )
        return res.status(200).json({message:`User with email ${email} logged in`})
    } else {
        return res.status(400).json({message:'Invalid credentials'})
    }



    
})

export default router;