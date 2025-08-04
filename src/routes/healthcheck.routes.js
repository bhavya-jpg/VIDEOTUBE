import { Router } from "express";

import {healthcheck} from "../controllers/healthcheck.controllers.js"

const router= Router()
router.route("/").get(healthcheck)


export default router;

// /Yes, exactly! When you use export default, you can import the exported value with any name you want, because it’s the default export.
