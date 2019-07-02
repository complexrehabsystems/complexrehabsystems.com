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
        sh '''PATH+GITA=/c/Program\\ Files/Git/bin
PATH+GITB=/c/Program\\ Files/Git/usr/bin

gatsby build'''
      }
    }
  }
}