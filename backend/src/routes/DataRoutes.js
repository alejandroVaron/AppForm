import { Router } from "express";
const router = Router();
import DataControler from "../controller/DataController.js";

router.get("/", DataControler.getAllData);
router.post("/", DataControler.addData);
router.put("/id=:id", DataControler.updateDataById);
router.delete("/id=:id", DataControler.deleteDataById);

export default router;
