import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo: string;

  @Column({ default: false })
  isDone: boolean;
}
