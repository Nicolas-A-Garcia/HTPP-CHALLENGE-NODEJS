import { Router } from "express";
import * as actorController from "../controllers/actor.controller";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/", actorController.getActors);
router.post("/", [authJwt.verityToken, authJwt.isModerator], actorController.createActor);
router.get("/:actorId", actorController.getActorById);
router.put("/:actorId", [authJwt.verityToken, authJwt.isModerator], actorController.updateActorById);
router.delete("/:actorId", [authJwt.verityToken, authJwt.isModerator], actorController.deleteActorsById);

export default router;