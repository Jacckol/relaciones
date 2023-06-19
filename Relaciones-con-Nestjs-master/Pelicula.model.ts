import { Column, 
    CreateDateColumn, 
    DeleteDateColumn, 
    Entity, 
    JoinColumn, 
    OneToMany, 
    PrimaryGeneratedColumn, 
    UpdateDateColumn } from "typeorm";
import { Director } from './director.model';


@Entity('Pelicula',{schema:'directorPelicula'})
export class PeliculaEntity{
    //columnas de la entidad 
    @PrimaryGeneratedColumn('Nombre')
    id:string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamptz',
        default:() => 'CURRENT_TIMESTAMP',
    })
    
    createAT:Date;

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

    deleteAt:Date;
    
    @OneToMany(() => Director, (director) => director.pelicula)
    @JoinColumn({name:'director_id'})
    director: Director;
    
    @Column('varchar',{
        name:'Pelicula',
        comment: 'Nombre del Pelicula',
    })
    pelicula:string;

    @Column('varchar',{
        name:'nacionalidad',
        comment:'Nacionalidad del pelicula',
    })
    ubication:string;
 
    
    @Column('varchar',{
        name:'numero_telefono',
        comment:'Numero de telefono'
    })
    
    numberOfPhonet:string;

}
