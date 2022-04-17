import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

//Desafio FC sobre Domain Events
//Crie 2 handlers exibindo um "console.log". 
export default class SendConsoleLog1Handler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    console.log(`This is the first console.log of event: CustomerCreated`); 
  }
}
