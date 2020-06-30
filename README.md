# Living Lab Website
This is the Living Lab Website version 2. This has been created by [Frinze Lapuz](https://github.com/frinzekt) for the Living Lab project. 


## Table of Contents
* [Quick Start](#quick-start)
* [Technologies](#technology-stack)
    - [Why Did I Use This Technology Stack?](why-did-i-use-this-technology-stack?)
* [File Structure](#file-structure)
* [Template Licensing](#template-licensing)

## Technology Stack
This website has been created using the following technologies:
- React - a UI library in JavaScript that utilizes the power of Client-Side Rendering for Single Page Application
- Next - a library of React that handles initial Server-Side Rendering, and also allows caching of the Static HTML and CSS generated readily to be served including the pages in the dynamic routes
- MaterialKit + MaterialUI - a CSS library created by Creative Tim that provides easy and ready to use components to create website layout very fast

### Why Did I Use This Technology Stack?
I used this technology stack for multiple reasons that I will list in the order of importance:
1. **Custom Reusable Components = Faster Development and Better Maintainability** - in this project, there are a lot of repetitions of layout in multiple pages such as header and footer. Moreover, some pages such as the "Accelerated Life Testing" pages content are repeated layout with the difference only the content. Hence, I needed a way in order to create reusable components so that I will not have to recreate or copy paste code that I have already written. This also means that one change of code, will change all the related pages. This is the power of React.
2. **Template Components = Faster Development and Responsive Design** - I needed a way to create responsive website that will look good regardless of whether the website is being viewed in a desktop, laptop, tablet or mobile phones. Furthermore, developing own components with good styling and also responsive takes too much time. Hence, the use of CSS library is important for this project. This is satisfied with MaterialKit + MaterialUI
3. **Static Site With Client-Side Rendering= Website Speed Perfomance and Security** - I needed a way to create a website that is fast and secure. The original website is a simple HTML and CSS website, and only contained 3 pages which is good especially for its simplicity for speed and security. In my side, I had to add approximately 18 pages which means that I needed a way to reduce the loading speed without compromising the original security it had. I used Next in order to cache the static HTML and CSS for server-side rendering while still maintaining the client-side rendering for the speed. Since the entire site is static, there is no dynamicness or backend services that can be hacked to change the content of the website without going through the source code. 

If this reasoning of mine does not satisfy you, feel free to contact me and have a discussion about this.

## Quick start
- Clone the repo: `git clone https://github.com/uwasystemhealth/livinlab-site-v2.git`.
- Install the dependencies: `npm install` or `yarn install`

## File Structure
This is what you will see in the directories. *Note: there will be comments for VERY VERY IMPORTANT FILES*
```
livinlab-site-v2
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── next.config.js //CONTAINS CONFIGURATIONS FOR RUNNING SUCH AS FOR WEBPACK
├── package.json //CONTAINS THE DEPENDENCIES OF THIS PROJECT
├── assets //MATERIAL KIT ASSETS
│   ├── css
│   ├── img
│   │   ├── examples
│   │   └── faces
│   ├── jss // CONTAINS PROPERTIES OF THE STYLED COMPONENTS
│   │   ├── nextjs-material-kit
│   │   │   ├── components
│   │   │   └── pages
│   │   │       ├── componentsSections
│   │   │       └── landingPageSections
│   │   └── nextjs-material-kit.js
│   └── scss
│       ├── core
│       │   ├── mixins
│       │   └── variables
│       ├── plugins
│       └── nextjs-material-kit.scss
├── pages  // ACCESSIBLE ROUTES
│   ├── _app.js  // CONTAINS THE BASIC LAYOUT OF ANY PAGE SERVED IN /pages
│   ├── _document.js  // CONTAINS ANY META TAGS OF ANY PAGE SERVED IN /pages
│   ├── _error.js   // CONTAINS WHAT HAPPENS ON ERROR OR 404
│   ├── components.js
│   ├── index.js
│   ├── landingpage.js
│   ├── loginpage.js
│   └── profilepage.js
├── components //REUSABLE COMPONENTS
│   ├── Badge
│   │   └── Badge.js
│   ├── Card
│   │   ├── Card.js
│   │   ├── CardBody.js
│   │   ├── CardFooter.js
│   │   └── CardHeader.js
│   ├── Clearfix
│   │   └── Clearfix.js
│   ├── CustomButtons
│   │   └── Button.js
│   ├── CustomDropdown
│   │   └── CustomDropdown.js
│   ├── CustomInput
│   │   └── CustomInput.js
│   ├── CustomLinearProgress
│   │   └── CustomLinearProgress.js
│   ├── CustomTabs
│   │   └── CustomTabs.js
│   ├── Footer
│   │   └── Footer.js
│   ├── Grid
│   │   ├── GridContainer.js
│   │   └── GridItem.js
│   ├── Header
│   │   ├── Header.js
│   │   └── HeaderLinks.js
│   ├── InfoArea
│   │   └── InfoArea.js
│   ├── NavPills
│   │   └── NavPills.js
│   ├── PageChange
│   │   └── PageChange.js
│   ├── Pagination
│   │   └── Pagination.js
│   ├── Parallax
│   │   └── Parallax.js
│   ├── Snackbar
│   │   └── SnackbarContent.js
│   └── Typography
│       ├── Danger.js
│       ├── Info.js
│       ├── Muted.js
│       ├── Primary.js
│       ├── Quote.js
│       ├── Small.js
│       ├── Success.js
│       └── Warning.js
├── pages-sections  // SECTIONS OF PAGES - NAMED AFTER PAGES AND ROUTES OF PAGES
│   ├── Components-Sections
│   │   ├── SectionBasics.js
│   │   ├── SectionCarousel.js
│   │   ├── SectionCompletedExamples.js
│   │   ├── SectionDownload.js
│   │   ├── SectionExamples.js
│   │   ├── SectionJavascript.js
│   │   ├── SectionLogin.js
│   │   ├── SectionNavbars.js
│   │   ├── SectionNotifications.js
│   │   ├── SectionPills.js
│   │   ├── SectionTabs.js
│   │   └── SectionTypography.js
│   └── LandingPage-Sections
│       ├── ProductSection.js
│       ├── TeamSection.js
│       └── WorkSection.js
│
├── public  // ASSETS SPECIFIC TO THE LIVING LAB
```

## Template Licensing

- Copyright 2020 Creative Tim (https://www.creative-tim.com/?ref=njsmk-readme)

- Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/master/LICENSE.md)
