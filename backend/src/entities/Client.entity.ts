import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BeforeInsert,
    BeforeUpdate,
    CreateDateColumn,
    OneToMany,
    DeleteDateColumn,
  } from "typeorm";
  import { getRounds, hashSync } from "bcryptjs";
  import Contact from "./Contact.entity";
  
  @Entity("clients")
  class Client {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: "varchar", length: 45 })
    fullName: string;
  
    @Column({ type: "varchar", length: 45, unique: true })
    email: string;
  
    @Column({ length: 120 })
    password: string;
  
    @Column({ length: 45 })
    phoneNumber: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string;
  
    @DeleteDateColumn({ type: "date", nullable: true })
    deletedAt?: string | null;
  
    @OneToMany(() => Contact, (c) => c.client)
    contacts: Contact[];
  
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      const hasRounds: number = getRounds(this.password);
      if (!hasRounds) {
        this.password = hashSync(this.password, 10);
      }
    }
  }
  
  export default Client;