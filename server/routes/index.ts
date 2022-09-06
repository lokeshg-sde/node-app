import express from 'express'

import UserControllers from '../controllers/UserController'
import MailController from '../controllers/MailController'

const router = express.Router()

router.use('/users', UserControllers)
router.use('/email', MailController)

export default router
