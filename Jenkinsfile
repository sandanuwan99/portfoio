// =====================================================================
// Jenkins Enterprise CI/CD Pipeline
// Project: Janitha Sandanuwan Full-Stack Portfolio
// Flow: Git -> SonarQube -> Tests -> Docker -> AWS ECR -> Kubernetes
// =====================================================================

pipeline {
    agent any

    environment {
        // AWS & ECR Configuration
        AWS_DEFAULT_REGION = 'ap-south-1' // Mumbai or us-east-1
        AWS_CREDENTIALS_ID = 'aws-credentials' // Stored securely in Jenkins Credentials
        SONARQUBE_SERVER_NAME = 'sonar-server'  // Configured under Manage Jenkins -> System

        // Image Names & Tags
        IMAGE_TAG = "${env.BUILD_NUMBER}-${env.GIT_COMMIT.take(7)}"
        FRONTEND_IMAGE = "janitha-portfolio-frontend"
        BACKEND_IMAGE = "janitha-portfolio-backend"
    }

    tools {
        // Automatically inject build tools configured in Jenkins Global Tool Configuration
        jdk 'Java-17'
        maven 'Maven-3.9'
        nodejs 'Node-20'
    }

    stages {
        // -------------------------------------------------------------
        // Stage 1: Checkout Source Code
        // -------------------------------------------------------------
        stage('1. Checkout Source Code') {
            steps {
                echo 'Checking out source code from GitHub...'
                checkout scm
            }
        }

        // -------------------------------------------------------------
        // Stage 2: SonarQube Static Code Analysis
        // -------------------------------------------------------------
        stage('2. SonarQube Code Analysis') {
            steps {
                echo 'Scanning source code for vulnerabilities, code smells, and security bugs...'
                withSonarQubeEnv("${SONARQUBE_SERVER_NAME}") {
                    // Run SonarScanner using project properties
                    bat 'sonar-scanner' // On Linux/Mac use 'sh "sonar-scanner"'
                }
            }
        }

        // -------------------------------------------------------------
        // Stage 3: Quality Gate (Security & Reliability Check)
        // -------------------------------------------------------------
        stage('3. Quality Gate') {
            steps {
                timeout(time: 5, unit: 'MINUTES') {
                    script {
                        echo 'Waiting for SonarQube Quality Gate verification...'
                        def qg = waitForQualityGate()
                        if (qg.status != 'OK') {
                            error "Pipeline aborted: Quality Gate failed with status: ${qg.status}. Fix security flaws before deploying!"
                        }
                        echo 'Quality Gate passed successfully!'
                    }
                }
            }
        }

        // -------------------------------------------------------------
        // Stage 4: Backend Unit Tests & Build
        // -------------------------------------------------------------
        stage('4. Build & Test Backend') {
            steps {
                dir('backend') {
                    echo 'Running Spring Boot Maven tests & package...'
                    bat 'mvn clean test package -DskipTests=false'
                }
            }
        }

        // -------------------------------------------------------------
        // Stage 5: Frontend Lint & Build Test
        // -------------------------------------------------------------
        stage('5. Test Frontend') {
            steps {
                dir('frontend') {
                    echo 'Installing npm dependencies and validating build...'
                    bat 'npm ci'
                    bat 'npm run lint'
                }
            }
        }

        // -------------------------------------------------------------
        // Stage 6: Build Docker Images
        // -------------------------------------------------------------
        stage('6. Build Docker Images') {
            steps {
                echo "Building Docker images with tag: ${IMAGE_TAG}..."
                bat "docker build -t ${BACKEND_IMAGE}:${IMAGE_TAG} -t ${BACKEND_IMAGE}:latest ./backend"
                bat "docker build -t ${FRONTEND_IMAGE}:${IMAGE_TAG} -t ${FRONTEND_IMAGE}:latest ./frontend"
            }
        }

        // -------------------------------------------------------------
        // Stage 7: Push Docker Images to AWS ECR
        // -------------------------------------------------------------
        stage('7. Push Images to AWS ECR') {
            steps {
                withCredentials([[
                    $class: 'AmazonWebServicesCredentialsBinding',
                    credentialsId: "${AWS_CREDENTIALS_ID}"
                ]]) {
                    script {
                        echo 'Logging in to Amazon ECR...'
                        // Fetch account ID & login to ECR registry
                        bat """
                            for /f "tokens=*" %%a in ('aws sts get-caller-identity --query Account --output text') do set AWS_ACCOUNT_ID=%%a
                            aws ecr get-login-password --region %AWS_DEFAULT_REGION% | docker login --username AWS --password-stdin %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com

                            docker tag ${BACKEND_IMAGE}:${IMAGE_TAG} %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${BACKEND_IMAGE}:${IMAGE_TAG}
                            docker tag ${BACKEND_IMAGE}:latest %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${BACKEND_IMAGE}:latest
                            docker push %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${BACKEND_IMAGE}:${IMAGE_TAG}
                            docker push %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${BACKEND_IMAGE}:latest

                            docker tag ${FRONTEND_IMAGE}:${IMAGE_TAG} %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${FRONTEND_IMAGE}:${IMAGE_TAG}
                            docker tag ${FRONTEND_IMAGE}:latest %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${FRONTEND_IMAGE}:latest
                            docker push %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${FRONTEND_IMAGE}:${IMAGE_TAG}
                            docker push %AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${FRONTEND_IMAGE}:latest
                        """
                    }
                }
            }
        }

        // -------------------------------------------------------------
        // Stage 8: Deploy to Kubernetes Cluster (Rolling Update)
        // -------------------------------------------------------------
        stage('8. Deploy to Kubernetes (EKS)') {
            steps {
                echo 'Deploying latest container images to Kubernetes Cluster...'
                bat """
                    kubectl apply -f k8s/namespace.yaml
                    kubectl apply -f k8s/secrets-config.yaml
                    kubectl apply -f k8s/sqlserver-deployment.yaml
                    kubectl apply -f k8s/backend-deployment.yaml
                    kubectl apply -f k8s/frontend-deployment.yaml
                    kubectl apply -f k8s/ingress.yaml

                    kubectl set image deployment/portfolio-backend backend=%AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${BACKEND_IMAGE}:${IMAGE_TAG} -n portfolio
                    kubectl set image deployment/portfolio-frontend frontend=%AWS_ACCOUNT_ID%.dkr.ecr.%AWS_DEFAULT_REGION%.amazonaws.com/${FRONTEND_IMAGE}:${IMAGE_TAG} -n portfolio

                    kubectl rollout status deployment/portfolio-backend -n portfolio --timeout=180s
                    kubectl rollout status deployment/portfolio-frontend -n portfolio --timeout=180s
                """
                echo 'Deployment rollout completed successfully!'
            }
        }
    }

    // -----------------------------------------------------------------
    // Post-Execution Actions
    // -----------------------------------------------------------------
    post {
        always {
            echo 'Pipeline execution finished. Cleaning up temporary artifacts...'
            cleanWs() // Workspace cleanup
        }
        success {
            echo '🎉 CI/CD Pipeline executed successfully! New version deployed to AWS.'
        }
        failure {
            echo '❌ Pipeline failed! Please inspect logs above for error details.'
        }
    }
}
