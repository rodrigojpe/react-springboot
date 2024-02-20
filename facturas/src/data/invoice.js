

export const invoice = {
    id: 1,
    name: "Alfreds Futterkiste",
    client: {
        name: "Maria Anders",
        lastName: "Smith",
        address: {
            country: "Germany",
            city: "Berlin",
            street: "Prenzlauer Berg",
            number: 123,
        }
    },
    company: {
        name: "ACME Corp",
        fiscalNumber: 123123,
        address: {
            country: "USA",
            city: "New York",
            street: "5th Avenue",
            number: 456,
        },
    },
    items: [
        {
            id:1,
            product: "Product 1",
            quantity: 10,
            price: 10.00,
        },
        {
            id:2,
            product: "Product 2",
            quantity: 10,
            price: 403.00,
        },
        {
            id:3,
            product: "Product 3",
            quantity: 10,
            price: 50.00,
        },

    ]
}