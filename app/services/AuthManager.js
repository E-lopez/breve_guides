import React, { Component } from 'react';
import { Alert } from 'react-native';
import { firebaseApp } from './Firebase';
import { customDate } from './DataManager';


export function validateType(email, password) {

  var db = firebaseApp.database();

    return new Promise((res, rej) => {
      logIn.call(this, email, password)
      .then((user) => {
        db.ref(`guides/${user.uid}`).on('value', function(snap) {
          if(snap.val()) { res(snap.val())} 
          else { rej(firebaseApp.auth().signOut()) }
        })
      })
      .catch((err) => rej(err))
    })
  };


async function logIn(email, password) {

  return new Promise((res, rej) => {
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
    .then((user) => res(user))
    .catch((err) => { rej(err)})
  })
  
};

  
export async function BYPASS_LOGIN() {
  
  var db = firebaseApp.database();

    return new Promise((res, rej) => {
      firebaseApp.auth().onAuthStateChanged((user) => {
        if(user) {
          var guideData = db.ref(`guides/${user.uid}`)
          guideData.on('value', (snap) => {
            if(snap.val()) { 
              var user = snap.val()
              var guide = {}
              var sessions;

              guideData.child('sessions').limitToLast(1).once('value')
              .then((snap) => {
                
                session = snap.val()
  
                guide['status'] = user.status
                guide['scoring'] = user.scoring
                guide['profile'] = {firstName: user.profile.firstName, 
                                    surname: user.profile.surname, 
                                    count: user.profile.count,
                                    new: user.profile.new
                                  }
                guide['pending'] = user.pendingSession ? user.pendingSession : false
                guide['sessions'] = session

                res(guide) 
              })
              .catch((err) => rej(console.log(err)))
            }
            else { rej((err) => console.log("err")) }
          })
        } else {
          rej((err) => console.log("err"))
        }
      })
    })  
};


export function logout(navigate) {
    firebaseApp.auth().signOut()
    .then(() => {
        navigate('Home')
    })
    .catch((err) => {
        alert(err)
    });
}