import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movie } from "src/Entities/movie";
import { Repository } from "typeorm";

@Injectable({})
export class MovieService {
    constructor(@InjectRepository(Movie) private readonly _movieRepository: Repository<Movie>){

    }

    getMovies(){
        return this._movieRepository.createQueryBuilder('movie')
        .leftJoinAndSelect('movie.actors', 'actors')
        .getMany();
    }

    getMovieById(id: number){
        return this._movieRepository.createQueryBuilder('movie').where('movie.movie_id = :id', { id })
        .leftJoinAndSelect('movie.actors', 'actors')
        .getMany();
    }
}

