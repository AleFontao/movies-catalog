import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./movie";

@Entity({ name: "actors"})
export class Actor{
    @PrimaryGeneratedColumn()
    actor_id: number;

    @Column({ length:  100})
    name: string;

    @ManyToMany(() => Movie)
    movies: Movie[];
}