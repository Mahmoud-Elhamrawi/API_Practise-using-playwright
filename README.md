# API Automation Testing Framework – Playwright & TypeScript

An API Automation Testing project built using **Playwright and TypeScript**, designed to practice and demonstrate REST API testing concepts, request handling, response validation, and automated test execution.

The project uses [RESTful API](https://restful-api.dev/) as its API testing environment.

## Tech Stack

- **Programming Language:** TypeScript
- **Automation Framework:** Playwright
- **Test Runner:** Playwright Test
- **Runtime Environment:** Node.js
- **Package Manager:** npm
- **Reporting:** Playwright HTML Reporter
- **CI/CD:** GitHub Actions

## Project Overview

This project focuses on building practical API automation tests using Playwright's `APIRequestContext`.

It provides hands-on practice with REST API testing, including:

- Sending HTTP requests.
- Validating API responses.
- Checking HTTP status codes.
- Working with JSON request and response bodies.
- Managing API test execution.
- Generating HTML test reports.

## API Environment

**Base URL:**

```text
https://api.restful-api.dev
```

API documentation:

[RESTful API Documentation](https://restful-api.dev/)

## Project Structure

```text
API_Practise-using-playwright/
│
├── .github/
│   └── workflows/
│       └── Playwright Tests CI workflow
│
├── src/
│   └── api/
│       └── tests/
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js (LTS recommended)
- npm
- Git
- Visual Studio Code (recommended)

### 1. Clone the Repository

```bash
git clone https://github.com/Mahmoud-Elhamrawi/API_Practise-using-playwright.git
```

### 2. Navigate to the Project

```bash
cd API_Practise-using-playwright
```

### 3. Install Dependencies

```bash
npm ci
```

### 4. Run All API Tests

```bash
npx playwright test
```

### 5. Run Tests Using the API Project

```bash
npx playwright test --project=api
```

### 6. Run a Specific Test

```bash
npx playwright test -g "test name"
```

## Playwright Configuration

The project is configured with:

- Dedicated API test directory: `src/api/tests`
- API project configuration.
- Base URL configuration.
- Fully parallel test execution locally.
- HTML reporting.
- Automatic retries on CI.
- Single worker execution on CI.
- Trace collection on the first retry.

## Test Reports

The project uses Playwright HTML Reporter.

After running the tests, generate and open the report:

```bash
npx playwright show-report
```

The report provides information about:

- Passed tests.
- Failed tests.
- Execution duration.
- Error details.
- Test execution results.

## CI/CD Integration

The project includes a GitHub Actions workflow to automate test execution.

The workflow is configured to:

1. Check out the repository.
2. Set up Node.js.
3. Install project dependencies.
4. Execute Playwright API tests.
5. Publish the Playwright HTML report as a workflow artifact.

## Key Skills Demonstrated

- REST API Automation Testing.
- Playwright APIRequestContext.
- TypeScript.
- HTTP Methods and Status Codes.
- JSON Request and Response Handling.
- API Assertions.
- Test Organization.
- HTML Test Reporting.
- Git and GitHub.
- CI/CD with GitHub Actions.

## Future Improvements

- Add positive and negative API test scenarios.
- Implement reusable API client methods.
- Improve test data management.
- Add JSON Schema validation.
- Introduce environment-based configuration.
- Improve test independence.
- Add API response time validation.
- Enhance CI/CD reporting.

## Author

**Mahmoud Elhamrawi**

Software Test Engineer | QA Automation Engineer

GitHub: [Mahmoud-Elhamrawi](https://github.com/Mahmoud-Elhamrawi)

---

*This project is part of my continuous learning journey in Software Quality Assurance and API Automation Testing using Playwright and TypeScript.*
