import { Router } from "express";
import * as directorController from "../controllers/director.controller";
import { authJwt } from "../middlewares";



const router = Router();

router.get("/", directorController.getDirectors);
router.post("/", [authJwt.verityToken, authJwt.isModerator], directorController.createDirector);
router.get("/:directorId", directorController.getDirectorById);
router.put("/:directorId", [authJwt.verityToken, authJwt.isModerator], directorController.updateDirectorById);
router.delete("/:directorId", [authJwt.verityToken, authJwt.isModerator], directorController.deleteDirectorsById);

export default router;