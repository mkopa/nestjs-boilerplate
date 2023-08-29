import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TasksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ default: false })
  done: boolean;
}
