import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Actor } from './actor';

@Entity({ name: 'movies' })
export class Movie {
    @PrimaryGeneratedColumn()
    movie_id: number;

    @Column({ length: 255 })
    title: string;

    @Column()
    release_year: number;

    @Column({ length: 100 })
    genre: string;

    @Column({ length: 100 })
    director: string;

    @Column()
    runtime_minutes: number;

    @Column({ type: 'decimal', precision: 3, scale: 1 })
    rating: number;

    @Column({ type: 'text' })
    plot_summary: string;

    @Column({ type: 'decimal', precision: 3, scale: 1 })
    imdb_rating: number;

    @Column({ length: 255 })
    poster_url: string;

    @ManyToMany(() => Actor)
    @JoinTable({
        name: 'MOVIE_ACTORS',
        joinColumn: {
            name: 'movie_id',
            referencedColumnName: 'movie_id',
        },
        inverseJoinColumn: {
            name: 'actor_id',
            referencedColumnName: 'actor_id',
        },
    })
    actors: Actor[];
}
