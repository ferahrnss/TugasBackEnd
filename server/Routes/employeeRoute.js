import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.EmplyCtrl.findAll)
router.get('/:id',indexCtrl.EmplyCtrl.findOne)
router.post('/',indexCtrl.EmplyCtrl.create)
router.put('/:id',indexCtrl.EmplyCtrl.update)
router.delete('/:id',indexCtrl.EmplyCtrl.deleted)
router.get ('/sql/:id',indexCtrl.EmplyCtrl.querySQL)
export default router
