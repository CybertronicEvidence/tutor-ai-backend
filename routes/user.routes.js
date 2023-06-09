const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const { updateLevel } = require('../controllers/scores.controller');
const {
    update,
    setPassword,
    forgotPassword,
    setLanguage,
    changePassword,
    changeDp,
    increaseLessons,
    deletes,
} = require('../controllers/user.controller');

router.patch('/:id', update);

router.post('/forgot-password/:id', forgotPassword);

router.patch('/set-password/:id', setPassword);

router.patch('/change-password/:id', changePassword);

router.patch('/update-level/:id', updateLevel);

router.post('/language/:id', setLanguage);

router.patch('/update-pic/:id', changeDp);

router.put('/increase', auth, increaseLessons);

router.delete('/delete', auth, deletes);

module.exports = router;
