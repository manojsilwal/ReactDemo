node('node'){
    stage 'checkout'
        checkout scm
    stage 'Test'
        env.NODE_ENV = 'test'
        print "Envoironment will be : ${env.NODE_ENV}"
        sh 'node -v'
        sh 'npm install'
        sh 'npm test'
}