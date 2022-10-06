import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';
import { Contact } from './contacts/Entities/contact.entity';

@Module({
  
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'contact',
        entities: [Contact],
        synchronize: true,
      }),
    
    ContactsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
