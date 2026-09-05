# Static Websites

A collection of small web-development projects built primarily with HTML, CSS, and JavaScript, plus a few interactive and frontend-practice projects.

Live collection: https://aman1919.github.io/static-websites/

Repository: https://github.com/Aman1919/static-websites

## Overview

This repository contains:

- Small JavaScript utilities and games
- Interactive browser projects
- Responsive web-page experiments
- Website clones and frontend recreations
- Frontend Practice recreations
- Landing pages
- A Three.js / React / TypeScript Rubik's Cube project
- A restaurant landing page for Dal Chini Xpress

The projects are independent. Most can be opened directly through GitHub Pages without a build step.

## Project Index

| Project | Description | Main technologies / concepts |
|---|---|---|
| [Weather App](./weather/) | Simple weather interface with a location input and weather retrieval action. | HTML, JavaScript |
| [HTML Table Builder](./Html-table-builder/) | Generates HTML tables with configurable rows, columns, colspan and rowspan. | HTML, CSS, JavaScript |
| [Chess Game](./chess/) | Two-player browser chess implementation. The current live page identifies whose turn it is and the repository contains board, square, event, location, piece and chess-engine logic. | HTML, JavaScript |
| [Flappy Bird](./flappyBird/) | Browser game with a live score display. | HTML, CSS, JavaScript, game logic |
| [Roman Numeral Converter](./roman/) | Converts Roman numerals to integers and integers to Roman numerals, with a reference table for Roman symbols. | HTML, JavaScript |
| [Resume Builder](./resume-Builder/) | Form-driven resume generator with profile information, skills, work experience and education sections. | HTML, JavaScript |
| [Calculator](./calculator/) | Browser calculator implementation. | HTML, CSS, JavaScript |
| [To-Do List](./To%20do%20list/) | Browser-based task-list project. | HTML, CSS, JavaScript |
| [Snake Game](./Snake%20game/) | Classic Snake browser game. | HTML, CSS, JavaScript |
| [Super Tic-Tac-Toe](./tic-tac-toe/) | Tic-Tac-Toe project with a normal mode and an alternate game mode. | HTML, CSS, JavaScript |
| [Music Website Clone](./copy%20%20music%20website/) | Music-focused website recreation containing HTML, CSS, JavaScript and local image assets. | HTML, CSS, JavaScript |
| [Website Clone 1](./copy%20website%20first/) | Recreation of a business/marketing landing page based on the Softy Pinko design, with sections for strategy, process, testimonials, pricing, blog and contact. | HTML, CSS, Bootstrap-style layout |
| [NGO Website Clone](./copy%20website%20ngo/) | Multi-page website recreation containing about, blog, contact, gallery, program and treatment pages, plus a second NGO implementation. | HTML, CSS, JavaScript |
| [Count Randomizer](./count-random/) | Minimal increment/decrement counter interface. | HTML, JavaScript |
| [Layout 2](./layout%202/) | Historical Places of India page featuring palace/travel content and local audio. | HTML, CSS, media |
| [Parking Lot Management](./parking_lot_mangement/) | Form-based parking management interface for recording owner, car, car number and entry/exit information. | HTML, JavaScript |
| [Responsive Page](./responsive%20page/) | Responsive technology-themed page covering web development, machine learning, AI, blockchain, cloud computing and cybersecurity. | HTML, CSS, JavaScript |
| [Frontend Practice](./frontend/) | Collection of recreations inspired by Frontend Practice. | HTML, CSS, JavaScript |
| [Landing Pages](./landing-pages-tf/) | Landing-page experiments, including Dal Chini Xpress and Urban Dezine Studio. | HTML, CSS, JavaScript |
| [Rock Paper Scissors](./rock-paper-scissors/) | Browser implementation of Rock, Paper and Scissors. | HTML, CSS, JavaScript |
| [Rubik's Cube](./rubix-cube/) | Interactive 3D Rubik's Cube project. | React, TypeScript, Three.js ecosystem, Vite |
| [Webpage Layout 1](./webpage%20layout%201/) | India travel/history-themed page with destination sections for Dalhousie, Darjeeling, Gangtok and Ooty. | HTML, CSS, images |
| [Frontend Practice: Ableton](./frontend/Ableton/) | Recreation of an Ableton-style informational page. | HTML, CSS |
| [Frontend Practice: Backstage Talks](./frontend/backstage%20talks/) | Recreation of the Backstage Talks magazine website. | HTML, CSS, JavaScript |
| [Frontend Practice: Lobe Tour](./frontend/lobe%20tour/) | Recreation of the Lobe Tour website. | HTML, CSS |
| [Landing Page: Dal Chini Xpress](./landing-pages-tf/dal%20chini%20express/) | Restaurant landing page with local food, interior and storefront image assets. | HTML, CSS, JavaScript |
| [Landing Page: Urban Dezine Studio](./landing-pages-tf/urban-dezine-studio.html) | Standalone landing-page experiment. | HTML, CSS |
| [Three.js Rubik's Cube](https://rubix-cube.onrender.com/) | External deployment of the Rubik's Cube project. | React, TypeScript, Three.js |

## Directory Structure

```text
static-websites/
├── Html-table-builder/
├── Snake game/
├── To do list/
├── calculator/
├── chess/
│   └── Pieces/
├── copy  music website/
├── copy website first/
├── copy website ngo/
│   ├── copy/
│   └── ngo-2/
├── count-random/
├── flappyBird/
├── frontend/
│   ├── Ableton/
│   ├── backstage talks/
│   └── lobe tour/
├── landing-pages-tf/
│   └── dal chini express/
│       └── images/
├── layout 2/
├── parking_lot_mangement/
├── responsive page/
├── resume-Builder/
├── rock-paper-scissors/
├── roman/
├── rubix-cube/
│   ├── docs/
│   ├── public/
│   └── src/
│       └── components/
├── tic-tac-toe/
├── weather/
└── webpage layout 1/
```

## Frontend Practice

The `frontend/` directory contains recreations based on projects from Frontend Practice.

### Ableton

The Ableton recreation is a content-heavy informational page with:

- Navigation for Live, Push, Note, Link, Shop, Packs and Help
- Free-trial and account actions
- About and company information
- Careers content
- Newsletter signup
- Footer navigation

Files:

```text
frontend/Ableton/
├── index.html
└── style.css
```

### Backstage Talks

The Backstage Talks recreation is a magazine-style page with issue sections, purchase calls-to-action and responsive styling.

Files:

```text
frontend/backstage talks/
├── index.html
├── style.css
└── app.js
```

### Lobe Tour

The Lobe Tour recreation is a visual/product-style landing page.

Files:

```text
frontend/lobe tour/
├── index.html
└── style.css
```

## Landing Pages

### Dal Chini Xpress

The repository contains a restaurant landing page at:

```text
landing-pages-tf/
└── dal chini express/
    ├── index.html
    └── images/
        ├── a.txt
        ├── food-biryani.png
        ├── food-handi.png
        ├── interior-main.png
        ├── interior-seating.png
        ├── interior-wall.png
        ├── menu-breads.png
        └── storefront.png
```

The page uses locally stored restaurant imagery rather than relying only on remote image URLs.

### Urban Dezine Studio

`urban-dezine-studio.html` is a standalone landing-page experiment located directly inside `landing-pages-tf`.

## Games and Interactive Projects

### Chess

The chess project is organized around several JavaScript modules:

```text
chess/
├── Pieces/
├── Board.js
├── Event.js
├── Location.js
├── chessEngine.js
├── defs.js
├── index.html
├── index.js
└── square.js
```

The live interface currently exposes turn state and the repository contains separate engine/board/piece-related modules.

### Flappy Bird

A simple browser game with a score counter.

### Snake

A classic Snake implementation.

### Tic-Tac-Toe

Includes a normal Tic-Tac-Toe mode and an alternate mode through the interface.

### Rock, Paper, Scissors

A simple browser game using separate rock, paper and scissors image assets.

## Utility Projects

### HTML Table Builder

The table builder supports:

- Table creation
- Row/column manipulation
- Colspan
- Rowspan
- HTML generation

### Roman Numeral Converter

Supports both directions:

- Roman numeral → integer
- Integer → Roman numeral

### Resume Builder

The resume builder accepts:

- Image
- Full name
- Phone number
- Occupation
- Address
- Email
- Description
- Skills
- Work experience
- Education

### Parking Lot Management

The interface records:

- Owner
- Car name
- Car number
- Entry date
- Exit date
- List of parked cars
- Actions

## Rubik's Cube Project

The Rubik's Cube project is the most structured application in the repository.

It contains a Vite/TypeScript/React-style structure:

```text
rubix-cube/
├── docs/
├── public/
├── src/
│   ├── components/
│   │   ├── Cube.tsx
│   │   ├── RubixCube.tsx
│   │   └── SceneInit.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

The repository also contains `docs/docs.png` and the default Vite asset in `public/vite.svg`.

## Technologies Used Across the Repository

The projects collectively use or demonstrate:

- HTML5
- CSS3
- JavaScript
- TypeScript
- React
- Vite
- Three.js-related 3D rendering
- Browser DOM APIs
- Forms and input handling
- Client-side state and event handling
- Responsive layouts
- Local image and media assets
- GitHub Pages deployment
- External hosting for the Rubik's Cube project

The majority of the smaller projects are intentionally lightweight and do not require a package manager or build system.

## Running the Projects

For simple projects, open the relevant `index.html` directly in a browser.

For the repository as a whole:

```bash
git clone https://github.com/Aman1919/static-websites.git
cd static-websites
```

For the Rubik's Cube project, install its Node dependencies and use the Vite development workflow defined by its `package.json`.

## GitHub Pages

The collection is published through GitHub Pages. GitHub Pages serves the repository's static HTML/CSS/JavaScript projects directly from the repository.

Live collection:

https://aman1919.github.io/static-websites/

## Notes

Some projects are explicitly practice projects or recreations inspired by existing websites and Frontend Practice references. They should be treated as learning exercises rather than official copies or commercial implementations.

The public live index currently lists the main projects and links to their deployed pages. The repository also contains additional organization and source directories that are useful when exploring the code directly.

## Author

Aman Singh

GitHub: https://github.com/Aman1919

Repository: https://github.com/Aman1919/static-websites
