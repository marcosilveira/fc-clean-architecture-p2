import Address from "../value-object/address";
import Customer from "./custumer";

describe("Customer unit tests", () => {
  
    it("should throw error when id is empty", () => {
        expect(() => {
            let customer = new Customer("","John");
        }).toThrowError("customer: Id is required");
    })

    it("should throw error when name is empty", () => {
        expect(() => {
            let customer = new Customer("123","");
        }).toThrowError("customer: Name is required");
    })

    it("should throw error when name and id are empty", () => {
        expect(() => {
            let customer = new Customer("","");
        }).toThrowError("customer: Id is required,customer: Name is required");
    })

    it("should change name", () => {
        const customer = new Customer("123", "John");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    })

    it("should activate customer", () => {
        const customer = new Customer("1", "Customer 1");
        const address = new Address("Street", 123, "12345-678", "São Paulo");
        customer.Address = address;
        customer.activate();
        expect(customer.isActive()).toBe(true);
    })

    it("should throw error when addres is undefined when you activate a customer", () => {
        expect(() => {
            const customer = new Customer("1", "Customer 1");
            customer.activate();
        }).toThrowError("Address is mandatory to activate a customer");
    })

    it("should deactivate customer", () => {
        const customer = new Customer("1", "Customer 1");
        customer.deactivate();
        expect(customer.isActive()).toBe(false);
    })

})