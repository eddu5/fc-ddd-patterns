import EventDispatcher from "../../@shared/event/event-dispatcher";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/send-email-when-product-is-created.handler";
import ProductCreatedEvent from "../../product/event/product-created.event";
import CustomerCreatedEvent from "./customer-created.event";
import EnviaConsoleLog1Handler from "./handler/send-console-log-1.handler";
import EnviaConsoleLog2Handler from "./handler/send-console-log-2.handler";

//O primeiro evento deverá acontecer quando um novo Customer é criado. Nesse ponto, crie 2 handlers exibindo um "console.log". 
describe("A Customer Created test", () => {
  it("should call the 2 handlers when a customer is created", () => {
   
    const eventDispatcher = new EventDispatcher();
    const eventHandler1 = new EnviaConsoleLog1Handler();
    const eventHandler2 = new EnviaConsoleLog2Handler();
    const spyEventHandler1 = jest.spyOn(eventHandler1, "handle");
    const spyEventHandler2 = jest.spyOn(eventHandler2, "handle");

    eventDispatcher.register("CustomerCreatedEvent", eventHandler1);
    eventDispatcher.register("CustomerCreatedEvent", eventHandler2);

    expect(eventDispatcher.getEventHandlers["CustomerCreatedEvent"]).toHaveLength(2);
    expect(
      eventDispatcher.getEventHandlers["CustomerCreatedEvent"][0]
    ).toMatchObject(eventHandler1);

    const productCreatedEvent = new CustomerCreatedEvent({});

    eventDispatcher.notify(productCreatedEvent);

    expect(spyEventHandler1).toHaveBeenCalled();
    expect(spyEventHandler2).toHaveBeenCalled();
  });
});
