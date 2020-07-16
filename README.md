# Living Lab Website
This is the Living Lab Website version 3. This has been created by [Frinze Erin Lapuz](https://frinzelapuz.now.sh/) for the Living Lab project.


## Table of Contents
- [Living Lab Website](#living-lab-website)
  - [Table of Contents](#table-of-contents)
  - [Technology Stack](#technology-stack)
    - [Why Did I Use This Technology Stack?](#why-did-i-use-this-technology-stack)
  - [Quick start](#quick-start)
  - [File Structure](#file-structure)
  - [Additional Notes](#additional-notes)
    - [File-Based Routing](#file-based-routing)
    - [File-Splitting Guide](#file-splitting-guide)
    - [File-Content Convention](#file-content-convention)
    - [Directory Naming In Some Directory](#directory-naming-in-some-directory)
    - [Environment Variable](#environment-variable)
    - [Docker Deploy](#docker-deploy)
  - [Template Licensing](#template-licensing)

## Technology Stack
This website has been created using the following technologies:
- React - a UI library in JavaScript that utilizes the power of Client-Side Rendering for Single Page Application
- Next - a library of React that handles initial Server-Side Rendering, and also allows caching of the Static HTML and CSS generated readily to be served including the pages in the dynamic routes
- MaterialKit + MaterialUI - a CSS library created by Creative Tim that provides easy and ready to use components to create website layout very fast

### Why Did I Use This Technology Stack?
I used this technology stack for multiple reasons that I will list in the order of importance:
1. **Custom Reusable Components = Faster Development and Better Maintainability** - in this project, there are a lot of repetitions of layout in multiple pages such as header and footer. Moreover, some pages such as the "Accelerated Life Testing" pages content are repeated layout with the difference only the content. Hence, I needed a way in order to create reusable components so that I will not have to recreate or copy paste code that I have already written. This also means that one change of code, will change all the related pages. This is the power of React.
2. **Template Components = Faster Development and Responsive Design** - I needed a way to create responsive website that will look good regardless of whether the website is being viewed in a desktop, laptop, tablet or mobile phones. Furthermore, developing own components with good styling and also responsive takes too much time. Hence, the use of CSS library is important for this project. This is satisfied with MaterialKit + MaterialUI
3. **Static Site With Client-Side Rendering = Website Speed Perfomance and Security** - I needed a way to create a website that is fast and secure. The original website is a simple HTML and CSS website, and only contained 3 pages which is good especially for its simplicity for speed and security. In my side, I had to add approximately 18 pages which means that I needed a way to reduce the loading speed without compromising the original security it had. I used Next in order to cache the static HTML and CSS for server-side rendering while still maintaining the client-side rendering for the speed. Since the entire site is static, there is no dynamicness or backend services that can be hacked to change the content of the website without going through the source code.

If this reasoning of mine does not satisfy you, feel free to contact me and have a discussion about this.

## Quick start
- Clone the repo: `git clone https://github.com/uwasystemhealth/livinglab-site-v3.git`.
- Install the dependencies: `npm install` or `yarn install`
- To build the static files: `npm run build` or `yarn build`
- To start development server: `npm run dev` or `yarn dev`
- To start a normal server: `npm run start` or `yarn start`

## File Structure
This is what you will see in the directories. *Note: there will be comments for VERY VERY IMPORTANT FILES*. (To Be Updated)
```
livinglab-site-v3
.
├── Dockerfile
├── docker-compose.yml
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md                   // GENERAL DOCUMENTATION
├── next.config.js              // CONTAINS CONFIGURATIONS FOR RUNNING SUCH AS FOR WEBPACK
├── package.json                // CONTAINS THE DEPENDENCIES OF THIS PROJECT
├── yarn.lock
├── assets                      // MATERIAL KIT ASSETS
│   ├── css                     // CONTAINS CSS MAP FROM SCSS
│   ├── img                     // CONTAINS STATICALLY INCLUDED IMAGES THAT ARE NOT REFERENCED BASED
│   │   └── ...                     // SUCH AS FAVICON, BASE BACKGROUND
│   ├── jss                     // CONTAINS PROPERTIES OF THE STYLED COMPONENTS
│   │   ├── custom              // CONTAINS CUSTOM COMPONENTS SPECIFIC STYLING
│   │   │   └── ...
│   │   ├── nextjs-material-kit // CONTAINS ALL MATERIAL KIT STYLING
│   │   │   ├── components      // CONTAINS MATERIALKIT COMPONENTS SPECIFIC STYLING
│   │   │   │    └── ...
│   │   │   └── pages
│   │   │       └── ...
│   │   └── nextjs-material-kit.js  // CONTAINS BASE TEMPLATE OF GENERAL STYLING FOR MATERIAL KIT COMPONENTS
│   └── scss                        // CONTAINS ALL SCSS - GENERAL STYLING FOR THE WHOLE WEBSITE
│       ├── core
│       │   ├── mixins              // SCSS MIXINS
│       │   └── variables           // SCSS VARIABLES
│       ├── plugins                 // MATERIAL KIT PLUGINS
│       └── nextjs-material-kit.scss   // LINKER OF ALL THE SCSS FILES
├── pages                           // ACCESSIBLE ROUTES
│   ├── api
│   │   └── mail.js                 // API for Mail Service - sends mail towards the an address after contact form
│   │
│   ├── accelerated-life-testing
│   │   ├── [testingName].js        // (DYNAMIC PAGE) for all ALT Equipment
│   │   └── index.js                // ALT equipment mainpage
│   │
│   ├── case-studies
│   │   ├── [caseStudyName].js      // (DYNAMIC PAGE) for all Case Studies
│   │   └── index.js                // Case Study Base page
│   │
│   ├── roadmap
│   │   ├── accelerated-life-testing    // (DYNAMIC PAGE) for all Case Studies
│   │   │   └──[testingName].js         // (DYNAMIC PAGE) for all Pathway Page
│   │   │   └──accelerated-life-test.js // CUSTOM Pathway Page
│   │   │   └──index.js                 // Mainpage for ALT Roadmap
│   │   │
│   │   └── accelerated-life-testing    // (DYNAMIC PAGE) for all Case Studies
│   │       └──[testingName].js         // (DYNAMIC PAGE) for all Pathway Page
│   │       └──site-trial.js            // CUSTOM Pathway Page
│   │       └──index.js                 // Mainpage for DST Roadmap
│   │
│   ├── _app.js                     // CONTAINS THE BASIC LAYOUT OF ANY PAGE SERVED IN /pages
│   ├── _document.js                // CONTAINS ANY META TAGS OF ANY PAGE SERVED IN /pages
│   ├── _error.js                   // CONTAINS WHAT HAPPENS ON ERROR OR 404
│   ├── components.js
│   ├── about.js
│   ├── index.js
│   └── privacy-policy.js
│
├── components                      //REUSABLE COMPONENTS - small case are for following PAGES directory
│   ├── accelerated-life-testing    //  upper case are for general directory
│   │   ├── TestingCard.js          // CARD LAYOUT OF THE TESTING EQUIPMENT
│   │   ├── TestingModal.js         // MODAL VIEW OF THE TESTING EQUIPMENT
│   │   └── TestingPageContent.js   // PAGE VIEW OF THE TESTING EQUIPMENT
│   │
│   ├── case-studies
│   │   ├── CSCard.js               // CARD LAYOUT OF THE TESTING EQUIPMENT
│   │   ├── CSModal.js              // MODAL VIEW OF THE CASE STUDY
│   │   └── CSPageContent.js        // PAGE VIEW OF THE CASE STUDY
│   │
│   ├── Context                     // Contextual Component
│   │   └── index.js                // General Context - currently only has Contact Form Trigger and State
│   │
│   ├── Layout
│   │   ├── CallToAction.js                       // THIS IS EMBEDDED WITH FOOTER
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Head.js                               // CONTAINS ALL META TAGS
│   │   └── Navbar.js
│   │
│   ├── MaterialKit                 // ALL MATERIAL KIT COMPONENTS
│   │   └── ...
│   │
│   ├── roadmaps
│   │   └── StepperPathway.js       // CONTAINS ICONS AND COMPONENT SPECIFIC TO THE ROADMAPS
│   │
│   └── Team
│       └── Collage.js
│
├── data                                      //CONTAINS ALL GROUPED DATA SUCH AS:
│   ├── AcceleratedLifeTestingContent.json    // ALT
│   ├── CaseStudies.json                      // Case Studies
│   ├── Roadmap-AcceleratedLifeTesting.json   // Roadmap Pathways and Details
│   ├── Roadmap-DeriskingSiteTrials.json
│   └── Team.json                             // Team Details
│
├── pages-sections                            // SECTIONS OF PAGES - NAMED AFTER PAGES AND ROUTES OF PAGES
│   ├── AboutPage-Sections                    // ABOUT PAGE SECTIONS
│   │ ├── AboutLivingLab.js
│   │ └── MeetTheTeam.js
│   │
│   ├── accelerated-life-testing
│   │ └── AcceleratedLifeTesting-Sections     // ALT SECTIONS
│   │     ├── Description.js
│   │     └── Testings.js
│   │
│   ├── CaseStudies-Sections                  // CASE STUDIES SECTIONS
│   │   ├── CaseStudiesContent.js             // CONTENT OF A SPECIFIC CASE STUDY
│   │   ├── CaseStudiesList.js                // LISTING OF CASE STUDIES
│   │   └── CaseStudiesMainPageContent.js     // THE MAIN PAGE CASE STUDY
│   │
│   ├── HomePage-Sections                     // HOME PAGE SECTIONS
│   │   ├── About.js
│   │   ├── AcceleratedLifeTesting.js
│   │   ├── CaseStudies.js
│   │   ├── DeriskingSiteTrials.js
│   │   └── Partners.js
│   │
│   ├── PrivacyPolicy-Sections
│   │   └── PrivacyPolicyContent.js
│   │
│   └── roadmap                                 // ALL ABOUT ROADMAP
│       ├── RoadmapContent-Sections             // A SPECIFIC ROADMAP CONTENT LAYOUT
│       │ ├── Content.js
│       │ └── RoadmapPathwayPage.js
│       │
│       └── RoadmapMainPage-Sections            // ROADMAP MAIN PAGE CONTENT LAYOUT
│           ├── ALTDescription.js
│           ├── Description.js
│           ├── DSTDescription.js
│           └── RoadmapsCard.js
├── helpers                                     // HELPER FUNCTIONS
│   └── validation.js                           // CLIENT-SIDE and SERVER-SIDE DATA VALIDATION
├── middlewares                                 // BACKEND MIDDLEWARES
│   └── SMTP.js                                 // CONTAIN SMTP TRANSPORTER
│
└── public                    // PUBLIC STATIC ELEMENT - FOLLOWS CLOSELY THE DIRECTORY STRUCTURE OF PAGES
    └── img                                          // CONTAINS IMAGES THAT ARE BY REFERENCE
        ├── ...                                      // GENERAL IMAGES
        ├── accelerated-life-testing                 // ALT EQUIPMENT IMAGES
        │   └── ...                                  // THE IMAGES ARE DIVIDED INTO EQUIPMENT DIRECTORIES
        │
        ├── case-studies
        ├── logos
        ├── roadmap                                  // ROADMAP IMAGES FOR ALT AND DST
        │   ├── accelerated-life-testing
        │   └── derisking-site-trials
        │
        └── team                                     // TEAM IMAGES
            └── ...
```
## Additional Notes
### File-Based Routing
`pages` directory is a very important folder as it determines the routing of the website. This can only contain "PAGE" components, and may contain static props fetching especially the **dynamic pages**.

More info about [routing here](https://nextjs.org/docs/routing/introduction) and about [dynamic routing here](https://nextjs.org/docs/routing/dynamic-routes).

### File-Splitting Guide
This project components are mainly divided into three main parts: `components`, `pages`, `pages-sections`:
1. components - are very basic components that could be reused anywhere
2. pages-sections - are sections of pages. For example the `pages/index` are divided into multiple sections seen in `pages-sections/HomePage-Sections`
3. pages - these are accessible routes. The names of this files depends on what you want the page URL to look like. This is related to [File-Based Routing](#file-based-routing).

### File-Content Convention
The file content writing has a convention that follows:
1. Importing of Modules
2. Setting Up Components
3. Component Exporting Content
4. (Optional - used only for dynamic pages) Setting Up How The Component will Be Processed as a page. Read more about this [here](https://nextjs.org/docs/basic-features/data-fetching)
5. Default Export  of 3

Take a look at `component/roadmaps/StepperPathway.js` as an example:
```js
// 1. Importing of Modules
import ... from "..."

// 2. Setting Up Components
const StyledStepButton = styled(StepButton)({
	...
});

// 3. (START) Component Exporting Content
export const StepIcon = (props) => {
	...
};

export const StepIconALT = (props) => {
	...
};

const StepperPathway = ({ pathway, roadmapTitle, whiteFont }) => {
	...
};

// 5. Default Export
export default StepperPathway;
```

### Directory Naming In Some Directory
In some folder such as `components`, `pages-section`, and `public/img`. There will occasionally be directories that are lower caps, these are directories that follows the same format as of the one in the `pages` directory for easy reference.

### Environment Variable
The format of the environment variable is this. (As of July 2020, only contains details for mail sending)
```
MAIL_RECEIVING_ACCOUNT=####
SMTP_HOST=####
SMTP_PORT=####
SMTP_AUTH_PASS=####
```

### Docker Deploy
Make sure you have docker installed and running.
Type the command:

This will build an image in docker
```bash
$    docker build -t livinglab-site-v3 .
```

Run the docker compose to run the image with configurations in "detached mode" - run in background
```bash
$    docker-compose up -d
```

## Template Licensing
- Copyright 2020 Creative Tim (https://www.creative-tim.com/?ref=njsmk-readme)

- Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)
