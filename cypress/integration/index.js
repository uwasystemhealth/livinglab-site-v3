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
    "roadmap",
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
  
  fullUrlEndpoints.forEach((currentPageUrl)=>{
    const endpoint = currentPageUrl.replace(PAGE_URL,"").replace("/","|")
    it(`Match previous image - ${endpoint}`, () => {
      cy.visit(currentPageUrl)
      cy.document().toMatchImageSnapshot()
    })
  })
  
})
