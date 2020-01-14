const express=require('express')
const router=express.Router()

const notesController=require('../app/controllers/notesController')
const categoriesController=require('../app/controllers/categoriesController')
const usersController=require('../app/controllers/usersController')
const {authenticate}=require('../app/middleware/authentication')

router.get('/notes', authenticate, notesController.list)
router.post('/notes',authenticate, notesController.create)
router.get('/notes/count',authenticate, notesController.count)
router.get('/notes/:id',authenticate, notesController.show)
router.put('/notes/:id',authenticate, notesController.update)
router.delete('/notes/:id',authenticate, notesController.destroy)


router.get('/categories',authenticate, categoriesController.list)
router.post('/categories',authenticate, categoriesController.create)
router.get('/categories/:id',authenticate, categoriesController.show)
router.put('/categories/:id',authenticate, categoriesController.update)
router.delete('/categories/:id',authenticate, categoriesController.destroy)

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account',authenticate, usersController.account)
router.delete('/users/logout', authenticate, usersController.logout)



module.exports=router