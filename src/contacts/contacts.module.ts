import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { Contact } from './Entities/contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact]),
  ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule {}
