import EventDispatcher from "../../@shared/event/event-dispatcher";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../../product/event/product-created.event";
import CustomerAddressChangedEvent from "./customer-address-changed.event";
import EnviaConsoleLog1Handler from "./handler/send-console-log-1.handler";
import EnviaConsoleLog2Handler from "./handler/send-console-log-2.handler";
import EnviaConsoleLogHandler from "./handler/send-console-log.handler";

//Desafio FC sobre Domain Events
//O segundo evento deverá ser disparado quando o endereço do Customer é trocado (método changeAddress()). Nesse caso, o ID, Nome, bem como os dados do endereço devem ser passados ao evento.

describe("Customer Address is Changed test", () => {
 
    it("should call the 2 handlers when a customer is created", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new EnviaConsoleLogHandler();
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("CustomerAddressChangedEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerAddressChangedEvent"][0]
    ).toMatchObject(eventHandler);

    const productCreatedEvent = new CustomerAddressChangedEvent({
      id: '1',
      nome: 'Customer 1',
      endereco: 'Streert 1',
    });

    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
