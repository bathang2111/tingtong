pipeline {
  agent any
  environment {
    BRANCH_NAME = 'staging'
    REGISTRY_ADDRESS = "registry.gitlab.com"
    IMAGE = "registry.gitlab.com/online-learning-hcmus/client/tingtong:${env.BRANCH_NAME}"
  }
  stages {
    stage('Build docker image and Push image') {
      steps {
        sh "docker login ${env.REGISTRY_ADDRESS} -u $REGISTRY_AUTH_USR_WEB_STUDENT -p $REGISTRY_AUTH_PSW_WEB_STUDENT "
        sh "docker build -t ${env.IMAGE} ."
        sh "docker push ${env.IMAGE}"
      }
    }

    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi ${env.IMAGE}"
      }
    }

    stage("Build docker-compose deploy") {
      steps {
        dir('docker-compose') {
            sh "docker-compose -f docker-compose.yml up -d"
        }
      }
    }
  }
}
