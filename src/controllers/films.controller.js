import Film from "../models/Film"

export const createFilm = async (req,res) =>{
    const {title, category, description, budget, imgUrl, actors, director} = req.body;
    const newFilm = new Film({title, category, description, budget, imgUrl, actors, director});
    if (!title)
      return res
        .status(400)
        .send({ error: "You can't create a film without a title" });
    
    const filmSaved = await newFilm.save();

    res.status(201).json(filmSaved);
}

export const getFilms = async (req,res) =>{
    const films = await Film.find();
    res.json(films)
}

export const getFilmById = async (req,res) =>{
    const film = await Film.findById(req.params.filmId);
    res.status(200).json(film);
}

export const updateFilmById = async (req,res) =>{
    const updatedFilm = await Film.findByIdAndUpdate(req.params.filmId, req.body);
    res.status(200).json(updatedFilm);
}

export const deleteFilmsById = async (req,res) =>{
    const deletedFilm = await Film.findByIdAndDelete(req.params.filmId);
    res.status(204).json();
}