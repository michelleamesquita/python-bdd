pipeline {
    agent any
    
    tools {nodejs "NodeJs"}
    
    stages {
        stage('Git') {
            steps {
                git branch: 'main', url: 'https://github.com/michelleamesquita/python-bdd.git'
            }
        }
        stage('BDD') {
            steps {
              
               sh 'cd bdd && npm install && npm run test && kill -9 $(lsof -ti:8888)'
            //   sh 'npm install'
            //   sh 'npm run test'
            }
        }
        stage('Deploy ') {
        parallel {
            stage('Prod') {
            steps {
                 sshagent(credentials:['Login_Server']){
               sh 'ssh  -o StrictHostKeyChecking=no  mac@127.0.0.1 "cd /Users/mac/Documents/python-bdd && python3 app.py"'
            }}
        }
        stage('Telegram') {
            steps {
                
               withCredentials(([string(credentialsId: 'telegramChatId', variable: 'CHAT_ID')])) {
      telegramSend(message: 'done 🚀', chatId: "$CHAT_ID")
      }}
            }
        }}
    }
}
