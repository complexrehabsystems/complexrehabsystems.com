pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/complexrehabsystems/complexrehabsystems.com', branch: 'master', changelog: true, poll: true)
      }
    }
    stage('build') {
      steps {
        sh '''npm --version
git --version
'''
        nodejs('node') {
          sh 'gatsby build'
        }

      }
    }
  }
}