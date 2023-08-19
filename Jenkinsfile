pipeline {
  agent any
  stages {
    stage('git checkout') {
      steps {
        git(url: 'https://github.com/adilkhan0011/cicd-jenkins.git', branch: 'master')
      }
    }

    stage('Log') {
      steps {
        sh 'ls'
      }
    }

    stage('build the images') {
      steps {
        sh '''docker build -f Dockerfile.mongo -t adilpriv/mongo .
docker build -f Dockerfile.node -t adilpriv/node-app .'''
      }
    }

    stage('docker login') {
      environment {
        USER = 'adildot68'
        PASS = 'system@6363'
      }
      steps {
        sh 'docker login -u $USER -p $PASS'
      }
    }

  }
}