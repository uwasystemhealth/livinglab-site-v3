describe('Image Difference', () => {
  const PAGE_URL = Cypress.env('FRONTEND_URL')
  const ENDPOINTS = [
    "",
    "accelerated-life-testing/",
    "accelerated-life-testing/accelerated-bearing-failure-testing",
    "accelerated-life-testing/ultraviolet-radiation-testing",
    "accelerated-life-testing/vibration-testing",
    "accelerated-life-testing/ingress-protection-testing-(water)",
    "accelerated-life-testing/electro-magnetic-compatibility-testing",
    "case-studies",
    "case-studies/accelerated-failure-of-bearings",
    "case-studies/comparing-the-performance-of-mems-iot-with-conventional-piezoelectric-vibration-sensor",
    "roadmap/accelerated-life-testing/product-opportunity",
    "roadmap/accelerated-life-testing/function-and-safety-standards",
    "roadmap/accelerated-life-testing/accelerated-life-tests",
    "roadmap/accelerated-life-testing/accelerated-life-test-trial-proposal",
    "roadmap/derisking-site-trials/product-opportunity",
    "roadmap/derisking-site-trials/function-and-safety-standards",
    "roadmap/derisking-site-trials/site-trial",
    "roadmap/derisking-site-trials/site-trial-proposal",
  ]

  const fullUrlEndpoints = ENDPOINTS.map(endpoint => `${PAGE_URL}/${endpoint}`)

  fullUrlEndpoints.forEach((currentPageUrl) => {
    const endpoint = currentPageUrl.replace(`${PAGE_URL}/`, "").replace("/", "=")
    // Match Each of the Endpoint in its previous snapshot
    it(`Renders the page - ${endpoint}`, () => {
      cy.visit(currentPageUrl)
    })

    it(`Image Difference on 720p Screens - ${endpoint}`, () => {
      cy.viewport(1280, 720)
      cy.matchImageSnapshot();

    })

    it(`Image Difference on Iphone 6+ Screens - ${endpoint}`, () => {
      cy.viewport("iphone-6+")
      cy.matchImageSnapshot();
    })

  })
})
