import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

import { Movie } from './Entities/movie';
import { MovieController } from './movies/movie.controller';
import { MovieService } from './movies/movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './Entities/actor';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123',
    database: 'MOVIES',
    entities: [Movie, Actor],
  }),
  TypeOrmModule.forFeature([Movie, Actor]),
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule { }
