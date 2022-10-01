import { Router } from "express";
import indexCtrl from "../controller/indexCtrl";
const router = Router()


router.get('/',indexCtrl.JhCtrl.findAll)
router.get('/:id',indexCtrl.JhCtrl.findOne)
router.post('/',indexCtrl.JhCtrl.create)
router.put('/:id',indexCtrl.JhCtrl.update)
router.delete('/:id',indexCtrl.JhCtrl.deleted)
router.get ('/sql/:id',indexCtrl.JhCtrl.querySQL)
export default router