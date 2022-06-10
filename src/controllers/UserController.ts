import express from 'express'
import bcrypt from 'bcryptjs'

import type { Router, Request, Response, NextFunction } from 'express'

import { register, login, getById } from '../services/UserServices'

const router: Router = express.Router()

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body
  const salt = bcrypt.genSaltSync(10)

  req.body.password = bcrypt.hashSync(password, salt)

  register(req.body)
    .then(() => res.send('success'))
    .catch((err) => next(err))
})

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body

  login({ username, password })
    .then((user) => {
      if (user) {
        res.json(user)
      } else {
        res.status(404).json({ message: 'User Not Found' })
      }
    })
    .catch((err) => next(err))
})

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  getById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => next(err))
})

export default router
