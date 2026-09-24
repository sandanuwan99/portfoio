# =====================================================================
# Stage 1: Build the Spring Boot JAR using Maven
# =====================================================================
FROM maven:3.9.6-eclipse-temurin-17-alpine AS builder

WORKDIR /build

# Cache Maven dependencies first
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copy source code and package application
COPY src ./src
RUN mvn clean package -DskipTests

# =====================================================================
# Stage 2: Minimal Production Runtime
# =====================================================================
FROM eclipse-temurin:17-jre-alpine AS runner

WORKDIR /app

# Run as non-root user for enterprise container security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Copy only the compiled executable JAR from builder stage
COPY --from=builder /build/target/app.jar app.jar

# Expose Spring Boot HTTP port
EXPOSE 8080

# Production JVM flags (memory-aware container tuning)
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"

ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar"]
