import express from 'express';
import { registerUser, loginUser, logoutUser } from '../controller/user.controller.js';
import { protect } from '../Middleware/auth.middleware.js'
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.get('/check', protect, (req, res) => {
    // If the token is valid, the user will be added to req.user by the middleware
    res.status(200).json({ success: true, token: req.cookies.token })
})

export default router;
