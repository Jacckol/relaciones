import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, JoinColumn, 
    ManyToOne, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { PeliculaEntity } from './Pelicula.model';

@Entity('Pelicula',{schema:'directorPelicula'})

export class Director{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('Nombre')
    id:string;
    @CreateDateColumn({
        //objeto
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;//atributo

    @UpdateDateColumn({
        name:'update_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAt:Date;

    @DeleteDateColumn({
        name:'delete_at',
        type:'timestamptz',
        nullable:true,
    })

    deleteAt:Date; //el nombre del atributo
    //Relationships
    //paramtrro de entrada =>
    @ManyToOne(() => PeliculaEntity, (pelicula) => pelicula.director)
    @JoinColumn({name:'pelicula_id'})
    pelicula: PeliculaEntity;

    @Column('varchar',{
        name:'name',
        unique:true,
        comment: 'Nombre del Director',
    })
    NameOfDirector:string;

    @Column('varchar',{
        name:'direccion',
        unique:true,
        comment:'Direccion',

    })
    direction:string;
    
    @Column('varchar',{
        name:'nacionalidad',
        unique:true,
        comment:'Nacionalidad'
    })
    nacionalidad:string;
}