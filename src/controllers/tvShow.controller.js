import TvShow from "../models/TvShow"

export const createTvShow = async (req,res) =>{
    const {title, category, description, budget, imgUrl, actors, director,seasons,episodesNames} = req.body;
    const newTvShow = new TvShow({title, category, description, budget, imgUrl, actors, director,seasons,episodesNames});
    if (!title)
      return res
        .status(400)
        .send({ error: "You can't create a TvShow without a title" });
    
    const tvShowSaved = await newTvShow.save();

    res.status(201).json(tvShowSaved);
}

export const getTvShows = async (req,res) =>{
    const tvShows = await TvShow.find();
    res.json(tvShows)
}

export const getTvShowById = async (req,res) =>{
    const tvShow = await TvShow.findById(req.params.tvShowId);
    res.status(200).json(tvShow);
}

export const updateTvShowById = async (req,res) =>{
    const updatedTvShow = await TvShow.findByIdAndUpdate(req.params.tvShowId, req.body);
    res.status(200).json(updatedTvShow);
}

export const deleteTvShowsById = async (req,res) =>{
    const deletedtvShow = await TvShow.findByIdAndDelete(req.params.tvShowId);
    res.status(204).json();
}