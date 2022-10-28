import { Router } from "express";
import * as filmsController from "../controllers/films.controller";
import { authJwt } from "../middlewares";


const router = Router();

router.get("/", filmsController.getFilms);
router.post("/", [authJwt.verityToken, authJwt.isModerator], filmsController.createFilm);
router.get("/:filmId", filmsController.getFilmById);
router.put("/:filmId", [authJwt.verityToken, authJwt.isModerator], filmsController.updateFilmById);
router.delete("/:filmId", [authJwt.verityToken, authJwt.isModerator], filmsController.deleteFilmsById);

export default router;