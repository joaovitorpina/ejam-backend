# Superheroes Service

## Description

This is a **NestJS-based API** designed to manage a collection of superheroes. The service provides an ability to create new heroes and sort them by their humility scores in descending order.

---

## Features

- **Create a Hero:** Add a superhero with their name, superpower, and humility score.
- **Fetch Heroes:** Retrieve a list of all superheroes sorted by their humility scores from highest to lowest.

This service showcases clean and efficient handling of hero data while emphasizing extensibility for future features.

---

## Project Structure

### Important Files and Purpose:

- **`src/app.controller.ts`**: Defines the API routes and handles HTTP requests for creating heroes and fetching them.
- **`src/app.service.ts`**: Contains the business logic for managing heroes, including saving and sorting heroes by their humility scores.
- **`src/model/hero.model.ts`**: Defines the `Hero` model that represents the main data structure for a superhero.

---

## Getting Started

### Prerequisites

- **Node.js** (v20 or higher)
- **npm** (v10 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

---

## Running the Application

### Development

Start the application in development mode:
```bash
npm run start
```

Run in watch mode (automatic reload on file changes):
```bash
npm run start:dev
```

### Production

Build and launch the application in production mode:
```bash
npm run build
npm run start:prod
```

---

## Testing

Run unit tests to ensure everything works as expected:
```bash
npm run test
```

Run end-to-end tests (e2e):
```bash
npm run test:e2e
```

Check test coverage:
```bash
npm run test:cov
```

---

## API Endpoints

### **POST `/superheroes`**

#### Description
Create a new superhero with their name, superpower, and humility score.

#### Request Payload:
```json
{
  "name": "Superman",
  "superpower": "Flight",
  "humilityScore": 95
}
```

#### Response:
- **201 Created:** Hero successfully saved.
- **400 Bad Request:** Missing required fields (`name`, `superpower`, or `humilityScore`).

---

### **GET `/superheroes`**

#### Description
Fetch all superheroes, sorted by their humility scores in descending order (highest score first).

#### Response:
- **200 OK**: Array of hero objects.

#### Example Response:
```json
[
  {
    "name": "Batman",
    "superpower": "Intelligence",
    "humilityScore": 98
  },
  {
    "name": "Superman",
    "superpower": "Flight",
    "humilityScore": 95
  }
]
```

---

## Notes

### Improve the service
I think I can improve this service with a teammate by using pair programming to extract the potential of 2 developers, and we could improve by reviewing the details of the application and see what the requisites are, then make an architecture round with the other teammate to evaluate the architecture of the application, for example see what database could be used by the use case of this service. And develop new routes that may be needed, not in parallel but in unison, working using pair programming, so the both are coding and helping each other out with insights and best practices.

### If I had more time
If I had more time I think I would improve the frontend part of the service, as it was optional the main focus was the backend on this time, so I see a lot of improvments that could be made in the frontend like internationalization, better styling and so on. In the backend side of things there are a lot of room for improvement too but in the basic areas they are complete, like it has unit tests for the main areas of code, and E2E too. I think an improvement would be to separate hero routes and services to another module, instead of the default app module, so in the future if it needs to implement like a villain module, it could be well segregated. For now with the requisites mentioned in the document for this test there are the areas I can think that could've been improved if I had more time.

Thank you for considering my application! Feel free to open issues to comment on improvements and adjustments that could be made!
