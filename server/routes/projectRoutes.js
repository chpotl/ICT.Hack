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
    { name: "coverUrl", maxCount: 1 },
    // { name: 'screenShotsUrl', maxCount: 6 },
=======
    { name: 'coverUrl', maxCount: 1 },
    { name: 'screenShotsUrl', maxCount: 6 },
>>>>>>> bf537738fe2ba7d3e442e82cc3c13eb81a378312
  ]),
  projectController.create
)
module.exports = router
