import React, { Component } from 'react';
import { Alert } from 'react-native';
import { firebaseApp } from './Firebase';

const DB = firebaseApp.database();


export function REMOVE_NEW_FLAG() {
  var db = DB
  const user = firebaseApp.auth().currentUser
  var guide = db.ref(`guides/${user.uid}`)

  console.log("DATA MAN 12 removing flag")

  guide.child('profile').update({
    new: false
  })
}



export async function APP_LISTENER(SESSIONS_ORGANIZER){
  var db = DB
  const user = firebaseApp.auth().currentUser
  var guide = db.ref(`guides/${user.uid}`)

  return new Promise((res, rej) => {
      guide.child('sessions').on('child_added', (snap) => {

        var indicator = Date.now() < parseInt(snap.key) + 120 * (60* Math.pow(10, 3))

        if(snap.val()) {
          //console.log("DATA MAN 18", snap.val())
          res(SESSIONS_ORGANIZER(snap.val(), snap.key, snap.val().validated))
        } else {
          rej(false)
        } 
      });
  })
};


export async function APP_CANCEL_LISTENER(session_cancelled){
  var db = DB
  const user = firebaseApp.auth().currentUser
  var guide = db.ref(`guides/${user.uid}`)

  console.log("DATA MAN 33, CANCEL LISTENER CALLED")

  return new Promise((res, rej) => {
      guide.child('sessions').once('child_removed').then((snap) => {
        var session = snap.val().validated

        if(session) {
          console.log("DATA MAN 55, session is validated, therefore completed")
          res(session_cancelled('complete'))
        }
        else {
          console.log("DATA MAN 55, session is not validated, therefore canceled")
          res(session_cancelled('cancelled'))
        }
    })
  })
};



export async function CHECK_PENDING_SESSIONS(){
  var db = DB
  const user = firebaseApp.auth().currentUser
  
  return new Promise((res, rej) => {
    db.ref(`guides/${user.uid}/pendingSession`).once('value')
    .then((snap) => {
      if(snap.val()) { res (true) }
      else { res(false) }
    })
    .catch((err) => console.log(err))
  })
}
  

export async function updateGuideStatus() {
   
  var location = await getLastPosition()

  return new Promise((res, rej) => {
      switchStatusActive.call(this, location.coords)
      .then(() => {
          res()
      })
      .catch((err) => console.log(err))
  })
}


var getLastPosition = async function() {
  var options = { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }

  return new Promise(function (res, rej) {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
}


async function switchStatusActive(location) {
  var db = DB;
  const user = firebaseApp.auth().currentUser

  return new Promise((res, rej) => {
      db.ref(`guides/${user.uid}`).update({
        status: true,
        location: {
          latitude: location.latitude, 
          longitude: location.longitude,
          speed: location.speed
        }
      })
      .then(() => { res() })
      .catch((err) => console.log(err))
  }) 
}


export async function switchStatusInactive() {
  var db = DB;
  const user = firebaseApp.auth().currentUser

  return new Promise((res, rej) => {
      db.ref(`guides/${user.uid}`).update({
        status: false,
      })
      .then(() => { res() })
      .catch((err) => console.log(err))
  })
}


export async function getCurrentStatus() {
  var db = DB;
  const user = firebaseApp.auth().currentUser

  return new Promise((res, rej) => {
    db.ref(`guides/${user.uid}/status`).on('value', (snap) => {
      if(value.val()) { res(true) }
    })
  })
}


export async function getUser(){
  var db = DB;
  const user = firebaseApp.auth().currentUser

  return new Promise((res, rej) => {
    db.ref(`guides/${user.uid}/profile`).on('value', (snap) => {
      if(snap.val()) {
        res(snap.val())
      } else {
        rej((err) => console.log(err))
      }
    })
  })
}


/**Function for retrieving sessions and displaying them in guide's app. It takes as arguments
 * user id, date of the session in custom format (YYYMMDD), control (which will be the key of each object)
 * and the type of operation. Can be to retrieve only sessions for the date or any of the three posible periods: last week, last 15 days and last month. Results from previous times need to be asked by mail, and will be send by mail.
 */

export async function GET_SESSIONS(upcoming, date, coords) {
  var db = DB

  return new Promise((res, rej) => {
    db.ref(`users/${upcoming.user}`).once('value')
      .then((snap) => {
          var profile = snap.child('profile').val()
          var feedback = snap.child('feedback').val()
          var sessions = snap.child(`/sessions/${date}/`).val() || snap.child(`/records/${date}/`).val()
      
          userInfo = {}
          userInfo['userKey'] = upcoming.user
          userInfo['profile'] = GET_PROFILE.call(this, profile) 
          userInfo['feedback'] = GET_USER_FEEDBACK.call(this, feedback) 
          userInfo['sessions'] = GET_USER_SESSIONS.call(this, sessions, date, coords)

          res(userInfo)
        })
        .catch((err) => rej(err))
  })
}



function GET_PROFILE(profile) {
    var userProfile = {name: profile.name, 
                       age: profile.age, 
                       score: profile.score,
                       phone: profile.phone,
                       profession: profile.profession, 
                       interests:  profile.preferences ? profile.preferences.interests : false,
                       goals:  profile.preferences ? profile.preferences.goals : false}
    return userProfile
};


function GET_USER_FEEDBACK(feedback) {

  var feedbackMin = {}

    if(feedback) { 
      feedbackMin = {
        strengths: feedback.strengths,
        oportunities: feedback.oportunities,
        level: feedback.level,
        comment: feedback.comment,
        posted: feedback.posted
      }
      return(feedbackMin) 
    } 
    else { return false }

} 


function GET_USER_SESSIONS(session, date, coords) {
  let { pow } = Math
  Sessions = []

  var sessionMin = {'address': session.address, 
                    'distance': session.distance, 
                    'indication': session.indication, 
                    'skill': session.skill,
                    'topic': session.topic,
                    'payment': session.payment,
                    'time': session.time,
                    'scheduled': date,
                    'type': session.type,
                    'coords': coords
                  }
                    
    var due = ''

    if(Date.now() > new Date(parseInt(date) + 6.2*pow(10, 6))) { due = true } 
    else { due = false }  

    Sessions.push({info: sessionMin, due: due})

  return Sessions
}



export async function SORT_UPCOMING(upcoming) {

  var next = {}

  Object.keys(upcoming).map((key) => {
    let element = upcoming[key]

    Object.keys(element['sessions']).map((key) => {
      let time = element['sessions'][key].date
      let due = element['sessions'][key].due
        if(!due && !next.time || next.time > time) {
          next = {time: time, session: element['sessions'][key], profile: element['profile']}
        }  
    })
  })

  if(next.session && next.profile) {
    var toShow = {session: next.session, profile: next.profile}
  } else {
    var toShow = false
  }
  return toShow
}


export async function VERIFY_SESSION(code, user, sessionCode) {
  var db = DB
  const guide = firebaseApp.auth().currentUser

  var dataToUpdate = {validated: true},
      userData = db.ref(`users/${user}/profile`),
      guideLocation = db.ref(`guides/${guide.uid}/profile/`),
      sessionLocation = db.ref(`guides/${guide.uid}/sessions/${sessionCode}/`)

  var dataToUpdateUser = {status: 'scorePending', pendingSession: {date: sessionCode, guide: guide.uid}}

  return Promise.all([
      sessionLocation.once('value'), 
      userData.once('value'), 
      guideLocation.once('value')
    ])
    .then((values) => {
      var guideValidated = values['0'].child('validated').val()
      var userValidated = values['1'].child('clientCode').val()
      var guideCount = values['2'].child('count').val()

      if (guideValidated) {
        return 'done'
      }
      else if (userValidated === code) {      
        return Promise.all([
          userData.update(dataToUpdateUser), 
          sessionLocation.update(dataToUpdate), 
          guideLocation.update({count: parseInt(guideCount ? guideCount : 0) + 1})
        ])
        .then(() => {
          return true
        })
        .catch((err) => console.log("VERIFY SESSION 280: BUG IN VALIDATING SESSION", err))
      }
      else if (userValidated !== parseInt(code))
      {
        return false
      }
  })
  .catch((err) => console.log(err))
};


export async function POST_PENDING_SESSION(session) {
  var db = DB
  const guide = firebaseApp.auth().currentUser

  var feedback = session.feedback

  feedback.dictionary = {}

  return new Promise((res, rej) => {
    db.ref(`guides/${guide.uid}/pendingSession`).set({
      name: session.name,
      userKey: session.userKey,
      sessionInfo: session.sessionInfo,
      date: session.date,
      feedback: feedback
    })
    .then(() => res())
    .catch((err) => console.log(err))
  })
};

export async function FETCH_PENDING_SESSION() {
  var db = DB
  const guide = firebaseApp.auth().currentUser

  return new Promise((res, rej) => {
    db.ref(`guides/${guide.uid}/pendingSession`).once('value')
    .then((snap) => {
      res(snap.val())
    })
    .catch((err) => console.log(err))
  })
}


export async function POST_FEEDBACK(user, feedback) {
  var db = DB
  const guide = firebaseApp.auth().currentUser
  var guideData =  db.ref(`guides/${guide.uid}`)
  var conversation = db.ref(`conversations/${user}`)

  return new Promise((res, rej) => {

    feedback['posted'] = Date.now()
    
    db.ref(`users/${user}/feedback`).update(feedback)
    .then(() => {
      guideData.child('pendingSession').remove()
      guideData.child('messages').remove()
      guideData.child('sessions').once('value')
      .then((snap) => {
        guideData.child('records').update(snap.val())
      })
      .then(() => {
        guideData.child('sessions').remove()
      })
      .then(() => {
        conversation.child(`${userKey}`).off('child_added')
      })
      res()
    })
    .catch((err) => rej(console.log(err)))
   }) 
}


export async function GET_RECORDS() {
  var db = DB
  const guide = firebaseApp.auth().currentUser
  var guideData = db.ref(`guides/${guide.uid}`)
  console.log("DATA MAN 379")
  return Promise.all([
    guideData.child('records').once('value'),
    guideData.child('cancelled').once('value')
  ])
  .then((values) => {
    console.log("DATA MAN 385", values[1].val())
    var records = values[0].val() ? values[0].val() : false
    var canceled = values[1].val() ? values[1].val() : false
    return Promise.all([
      ORGANIZE_CASH_RECORDS.call(this, records),
      ORGANIZE_RECORDS.call(this, records),
      ORGANIZE_CASH_CANCELLED.call(this, canceled)
      ])
      .then((result) => {
        return result
      })
      .catch((err) => console.log(err))
  })
}


async function ORGANIZE_CASH_RECORDS(records) {
  var doubles = 0,
      singles = 0,
      total = 0,
      doubleCash = 0,
      singleCash = 0,
      cash = 0

      if(records) {
        Object.keys(records).map((key) => {
          let rec = records[key]

          if(rec.type === "double") 
          {
              doubles += 1
              doubleCash += 60000 * 0.65
          } 
          else 
          {
              singles += 1
              singleCash += 40000 * 0.65
          }

          total = singles + doubles
          cash = singles * (40000 * 0.65) + doubles * (60000 * 0.65)

        })
      }

      records_cash = {doubles: doubles,
                      singles: singles,
                      total: total,
                      doubleCash: doubleCash,
                      singleCash: singleCash,
                      cash: cash
                    }

      return records_cash

}

async function ORGANIZE_RECORDS(records) {

  var newData = {}

  if(records) {
    Object.keys(records).reverse().map((key) => {
      newData[key] = records[key]
    })
  }
  
  return newData
}


async function ORGANIZE_CASH_CANCELLED(canceled) {

  var cancelledCash = 0,
      newCancelled = {emergency: 0,
                      time: 0,
                      location: 0,
                      choice: 0
                      }

  if(canceled) {
    Object.keys(canceled).map((key) => {
      let item = canceled[key]
  
      newCancelled[item.code] += 1
      cancelledCash += parseInt(item.penalty)
    })
  }                   
  

  var result = {
              cancelledCash: cancelledCash,
              newCancelled: newCancelled
            }

  return result
  
}

  
export async function VERIFY_PENDING_SESSION(){
  const user = firebaseApp.auth().currentUser
  const db = firebaseApp.database()

  return new Promise((res, rej) => {
    db.ref(`guides/${user.uid}/pendingSession`).once('value')
    .then((snap) => {
      if(snap.val())
      {
        rej(false)
      }
      else 
      {
        res(user, db)
      }
    })
  })
};


export async function CANCEL_SESSION(user, db, type, reason, data) {
  var userData = db.ref(`users/${data.userKey}`)
  var guideData = db.ref(`guides/${user.uid}`)

  return Promise.all([
    userData.child('sessions').remove(),
    userData.child('profile/pendingSession').remove(),
    guideData.child('sessions').remove(),
    guideData.child('pendingSession').remove(),
    guideData.child(`/cancelled/${Date.now()}`).set({
      end: type,
      type: data.type,
      amount: data.amount
    }),
    userData.child('cancelRequest').set({
      requested: Date.now()
    })
  ])
  .then(() => {
      return Alert.alert(
                  'Cancel request submited',
                  "User now has five minutes to verify this request. If is a mistake, he/she will contact you. Otherwise the session will be fully charged.",
                  [
                    {text: 'Got it', onPress: () => { return; }},
                  ],
                  { cancelable: true }
              )
  })
  .catch((err) => console.log(err))
};


export async function POST_MESSAGE(code, message, userKey) {
  const user = firebaseApp.auth().currentUser
  const db = DB

  console.log("DATA MAN 565, POST_MESSAGE", code, message, userKey)

  return new Promise((res, rej) => {
    db.ref(`conversations/${userKey}/${Date.now()}`).set({
      code: code,
      message: message,
      sender: 'g',
      state: 'posted'
    })
    .then(() => res())
    .catch((err) => console.log(err))
  })
}


export async function ADD_REPLY_LISTENER(new_message, userKey) {
  const user = firebaseApp.auth().currentUser
  const db = firebaseApp.database()

  var conversation = db.ref(`conversations`)
  return new Promise((res, rej) => {
    conversation.child(`${userKey}`).on('child_added', function(snap, prevChildKey) {
      if(snap.val()) {
        var sender = snap.val().sender === "g" ? true : false
        var data;
        var is_new = snap.key !== prevChildKey
        var guide_received = snap.val().guide_received && sender !== 'g' ? true : false

        conversation.child(`${userKey}`).once('value')
        .then((snap) => {
          data = snap.val()
          res(new_message(data, sender, is_new, guide_received)) 
        });
        if (!sender) {
          conversation.child(`${userKey}/${snap.key}`).update({
            guide_received: true
          })
        }
        
      }
      else { res(false) }
    })
  })
}
  

/**Mock user's coordinates
 * cedritos
4.724857999999999
-74.04599770000004

CC Calima John Bohnam
4.618474983283761
-74.08589601516724

Castilla  G. Carlin
4.6432290196779755
-74.1394886978378

Pontevedra Cheo Feliciano
4.698726741343062
-74.07846307751242

Toberín Tom Yorke
4.74710560349534
-74.05004668209585

Marly Ramón Valdez
4.631402721766748
-74.06454563140869
 */


