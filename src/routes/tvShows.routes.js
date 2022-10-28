import { Router } from "express";
import * as tvShowsControllers from "../controllers/tvShow.controller";
import { authJwt } from "../middlewares";

const router = Router();

router.get("/", tvShowsControllers.getTvShows);
router.post("/", [authJwt.verityToken, authJwt.isModerator], tvShowsControllers.createTvShow);
router.get("/:filmId", tvShowsControllers.getTvShowById);
router.put("/:filmId", [authJwt.verityToken, authJwt.isModerator], tvShowsControllers.updateTvShowById);
router.delete("/:filmId", [authJwt.verityToken, authJwt.isModerator], tvShowsControllers.deleteTvShowsById);

export default router;