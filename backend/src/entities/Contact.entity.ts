import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    ManyToOne,
  } from "typeorm";
  import Client from "./Client.entity";
  
  @Entity("contacts")
  class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @Column({ type: "varchar", length: 45 })
    fullName: string;
  
    @Column({ type: "varchar", length: 45 })
    nickName: string;

    @Column({ type: "varchar", length: 45, unique: true })
    email: string;
  
    @Column({ length: 45 })
    phoneNumber: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string;
  
    @ManyToOne(() => Client, (cl) => cl.contacts)
    client: Client;
  }
  
  export default Contact;