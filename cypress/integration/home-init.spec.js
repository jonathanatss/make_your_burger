context ("Image", () => {
    beforeEach(() => {
        cy.visit("http://localhost:8080/")
    })

    it("Should verify Hamburger logo", () => {
        cy.get("img").should("be.visible")
    })
})