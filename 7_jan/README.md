# Attendance (Gradle)

A Gradle-based Spring Boot 3.2.1 project for a simple school attendance CRUD API backed by MongoDB.

## Build & Run (Local)

Prereqs: Java 17+, MongoDB connection string in `MONGODB_URI` env var.

```bash
# From 7_jan directory
gradle clean build
java -jar build/libs/attendance-0.0.1-SNAPSHOT.jar
```

Or generate wrapper and use it:

```bash
gradle wrapper
./gradlew clean build
./gradlew bootRun
```

## Configuration

- App config: `src/main/resources/application.yml`
- Environment: `.env` (optional), `.env.example` provided
- MongoDB URI comes from `MONGODB_URI` (or Testcontainers in tests)

## API Endpoints

- Students: `/api/students`
- Courses: `/api/courses`
- Attendance: `/api/attendance`

Swagger UI: `/swagger-ui/index.html` (springdoc-openapi)

## Docker

```bash
# Build image
docker build -t attendance-gradle:latest .
# Run container (set your MongoDB URI)
docker run -p 8080:8080 -e MONGODB_URI="mongodb+srv://..." attendance-gradle:latest
```

## Tests

Uses JUnit 5 and Testcontainers for MongoDB.

```bash
gradle test
```
