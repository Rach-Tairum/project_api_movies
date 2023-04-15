import { Request, Response } from "express";
import { MovieModel } from "../models/Movie";
import Logger from "../../config/logger";
import { log } from "console";
import { isObjectIdOrHexString, isValidObjectId } from "mongoose";

export const createMovie = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const movie = await MovieModel.create(data)
    return res.status(201).json(movie)
  } catch (e: any) {
    Logger.error(`Erro no sistema: ${e.message}`)
  }

  return res.status(200).send('Deu certo o controller')
}

export const findMovieById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    log(id)
    const movie = await MovieModel.findById(id)

    if (!movie) {
      return res.status(404).json({error: "O filme não foi encontrado"})
    }

    return res.status(200).json(movie)
  } catch (e: any) {
    Logger.error(`Erro geral: ${e.message}`)
  }
}

export const getAllMovies = async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find()
    return res.status(200).json(movies)
  
  } catch (e: any) {
    Logger.error(`Erro getAll: ${e.message}`)
  }
}

export const removeMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const movies = await MovieModel.findById(id)

    if (!movies) {
      return res.status(404).json({error: "O filme não foi encontrado"})
    }

    await movies.deleteOne({ id })
    return res.status(200).json({ msg: "Filme removido com sucesso"})
  
  } catch (e: any) {
    Logger.error(`Erro remove: ${e.message}`)
    return res.status(500).json({error: "Por favor tente novamente mais tarde"})
  }
}

export const updateMovie = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const data = req.body
    log(typeof id)
    const movie = await MovieModel.findById({ObjectId: id})

    if (!movie) {
      return res.status(404).json({error: "O filme não foi encontrado"})
    }

    await MovieModel.updateOne({ _id: id }, data)
    const movie2 = await MovieModel.findById({ _id: id })

    return res.status(200).json(movie2)
  } catch (e: any) {
    Logger.error(`Erro geral: ${e.message}`)
    return res.status(500).json({error: "Por favor tente novamente mais tarde"})
  }
}