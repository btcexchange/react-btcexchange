import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAfvJH5-EM1GlwOZgRKovpmczgeMqtga3M',
  authDomain: 'btcexchange-87f39.firebaseapp.com',
  databaseURL: 'https://btcexchange-87f39.firebaseio.com',
  projectId: 'btcexchange-87f39',
  storageBucket: 'btcexchange-87f39.appspot.com',
  messagingSenderId: '1014426811887'
}
firebase.initializeApp(config)

export default firebase
