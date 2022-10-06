import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Contact } from './Entities/contact.entity';

@Controller('contacts')
export class ContactsController {
    constructor(private readonly contactsService:ContactsService){}

    @Get()
    index():Promise<Contact[]>{
        return this.contactsService.findAll();
    }

    @Post('create')
    async createContact(@Body()contactData:Contact):Promise<any>{
    return this.contactsService.create(contactData)
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactsService.update(contactData);
    }  

    @Delete(':id/delete')
    async delete(@Param('id')id):Promise<any>{
    return await this.contactsService.delete(id);
    }

}
