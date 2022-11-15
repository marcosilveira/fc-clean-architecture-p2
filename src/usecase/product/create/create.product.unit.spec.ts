//import CreateProductUseCase from "./create.product.usecase";

import CreateProductUseCase from "./create.product.usecase";

const input = {
    id: "123",
    name: "Product 1",
    price: 10
};

const MockRepository = () => {
    return {
        find: jest.fn(),
        findAll: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
    }
}

describe("Unit test create product use case", () => {

    it("should create a product", async () => {
        const productRepository = MockRepository();
        const productCreateUseCase = new CreateProductUseCase(productRepository);
        
        const output = await productCreateUseCase.execute(input);
        
        expect(output).toEqual({
            id: expect.any(String),
            name: input.name,
            price: input.price
        });
    });



});