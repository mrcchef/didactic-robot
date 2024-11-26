const express=require('express');
const router=express();

const auth=require('../middlewares/authMiddleware');
const { onlyAdminAccess }=require('../middlewares/adminMiddleware');
const permissionController=require('../controllers/admin/permissionController');
const { permissionAddValidator, permissionDeleteValidator,permissionUpdateValidator }=require('../helpers/adminValidator');

router.post('/add-permission', auth, permissionAddValidator,permissionController.addPermission);
router.get('/get-permissions', auth,onlyAdminAccess, permissionController.getPermissions);
router.post('/delete-permission', auth,permissionDeleteValidator, permissionController.deletePermission);
router.post('/update-permission', auth,permissionUpdateValidator, permissionController.updatePermission);

module.exports=router;