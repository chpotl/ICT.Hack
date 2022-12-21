const express = require("express")
const authController = require("../controllers/authController")
const projectController = require("../controllers/projectController")
const upload = require("../utils/upload")

const router = express.Router()

router.get("/", projectController.getAll)
router.get("/:projectId", projectController.getById)
router.use(authController.protect)
router.post(
  "/",
  upload.fields([
<<<<<<< HEAD
    { name: 'coverUrl', maxCount: 1 },
    { name: 'screenShot1', maxCount: 1 },
    { name: 'screenShot2', maxCount: 1 },
    { name: 'screenShot3', maxCount: 1 },
    { name: 'screenShot4', maxCount: 1 },
    { name: 'screenShot5', maxCount: 1 },
    { name: 'screenShot6', maxCount: 1 },
=======
    { name: "coverUrl", maxCount: 1 },
    { name: "screenShotsUrl", maxCount: 6 },
>>>>>>> 0979fdd612c82e09e522c5968420c4d4b29497c0
  ]),
  projectController.create
)
module.exports = router
