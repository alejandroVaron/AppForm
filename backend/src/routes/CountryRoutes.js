import { Router } from "express";
const router = Router();
import CountryController from "../controller/CountryController.js";

router.get("/", CountryController.getAllCountry);
router.post("/", CountryController.addCountry);

export default router;
