import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerAddressChangedEvent from "../customer-address-changed.event";

//Desafio FC sobre Domain Events
export default class SendConsoleLogHandler
  implements EventHandlerInterface<CustomerAddressChangedEvent>
{
  handle({ eventData }: CustomerAddressChangedEvent): void {
    console.log(`Address of client: ${eventData.id}, ${eventData.nome} chenged to: ${eventData.endereco}`); 
  }
}
