import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;
  @Column({ type: "text" })
  title!: string;
  @Column({ type: "text" })
  contents!: string;
}
