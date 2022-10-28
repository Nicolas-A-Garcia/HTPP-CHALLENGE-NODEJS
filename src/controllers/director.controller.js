import Director from "../models/Director"

export const createDirector = async (req,res) =>{
    const {name, genre, dateOfBirth, nationality, imgUrl, directedFilms} = req.body;
    const newDirector = new Director({name, genre, dateOfBirth, nationality, imgUrl, directedFilms});
    if (!name)
      return res
        .status(400)
        .send({ error: "You can't create a director without a name" });

    const directorSaved = await newDirector.save();

    res.status(201).json(directorSaved);
}

export const getDirectors = async (req,res) =>{
    const directors = await Director.find();
    res.json(directors)
}

export const getDirectorById = async (req,res) =>{
    const director = await Director.findById(req.params.directorId);
    res.status(200).json(director);
}

export const updateDirectorById = async (req,res) =>{
    const updatedDirector = await Director.findByIdAndUpdate(req.params.directorId, req.body);
    res.status(200).json(updatedDirector);
}

export const deleteDirectorsById = async (req,res) =>{
    const deletedDirector = await Director.findByIdAndDelete(req.params.directorId);
    res.status(204).json();
}