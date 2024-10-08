import { Router } from "express"

import * as rh from './requestHandler.js'

const router=Router()
router.route('/add').post(rh.addDonor)
router.route('/getdonors').get(rh.getDonors)
router.route('/getdonor/:id').get(rh.getDonorById);
router.route('/updatedonor/:id').put(rh.updateDonor);


export default router