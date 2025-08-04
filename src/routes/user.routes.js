import { Router } from "express";

import {
  registerUser,
  logoutUser,
  loginUser,
  refreshAcessToken,
  getUserChannelProfile,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

//unsecured routes
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.route("/login").post(loginUser);
router.route("/refresh-token").post(refreshAcessToken);

//secured routes
router.route("/change-password").post(verifyJWT,changeCurrentPassword);

router.route("/current-user").get(verifyJWT, getCurrentUser);

router.route("/c/:username").get(verifyJWT, getUserChannelProfile);

router.route("/update-account").patch(
  verifyJWT,updateAccountDetails
);

router.route("/update-avatar").patch(
  verifyJWT,upload.single('avatar'),updateUserAvatar
);
router.route("/cover-image").patch(
  verifyJWT,upload.single('coverImage'),updateUserCoverImage
);

router.route("/history").get(verifyJWT, getUserHistory);



router.route("/logout").post(verifyJWT, logoutUser);

export default router;
