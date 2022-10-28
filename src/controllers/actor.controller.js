import Actor from "../models/Actor"

export const createActor = async (req,res) =>{
    const {name, genre, dateOfBirth, nationality, imgUrl, actuedFilms} = req.body;
    const newActor = new Actor({name, genre, dateOfBirth, nationality, imgUrl, actuedFilms});
    if (!name)
      return res
        .status(400)
        .send({ error: "You can't create an actor without a name" });

    const actorSaved = await newActor.save();

    res.status(201).json(actorSaved);
}

export const getActors = async (req,res) =>{
    const actors = await Actor.find();
    res.json(actors)
}

export const getActorById = async (req,res) =>{
    const actor = await Actor.findById(req.params.actorId);
    res.status(200).json(actor);
}

export const updateActorById = async (req,res) =>{
    const updatedActor = await Actor.findByIdAndUpdate(req.params.actorId, req.body);
    res.status(200).json(updatedActor);
}

export const deleteActorsById = async (req,res) =>{
    const deletedActor = await Actor.findByIdAndDelete(req.params.actorId);
    res.status(204).json();
}