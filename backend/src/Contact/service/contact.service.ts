import { Contact } from "../../models/Contact.ts"
import AppDataSource from "../../database/config.ts"

export const contact = async(data:any) => {
    const contactRepo = AppDataSource.getRepository(Contact)
    console.log(data, "====>service");
    const newContact = new Contact()
    newContact.email = data.email
    newContact.subject = data.subject
    newContact.message = data.message
    console.log(newContact, "===>newContact");
    const result = await contactRepo.save(newContact)
    console.log(result, "==>a");
    
    return {
        id: result.id,
        email: result.email,
        subject: result.subject,
        message: result.message
    };
    
}