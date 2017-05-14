/**
 * Created by pratikgarala on 13/5/17.
 */

// firebase configurations

import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBkyBDUxSDxnhcXiHHtghUS0gwEwbluq6A",
    authDomain: "unicocodetest.firebaseapp.com",
    databaseURL: "https://unicocodetest.firebaseio.com"
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
