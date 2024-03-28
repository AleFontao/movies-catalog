import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { MovieService } from "./movie.service";

@Controller('movie')
export class MovieController{
    constructor(private _moviesService: MovieService){
        
    }
    @Get('getAll')
    async getAll(){
        return this._moviesService.getMovies();
    }

    @Get('getById/:id')
    async getById(@Param('id', ParseIntPipe) id: number){
        return this._moviesService.getMovieById(id);
    }
}