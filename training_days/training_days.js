/*
This program is a service called Training Days that sends you a message
for the event you signed up for, the activities the event involves,
and the days you have left to train.
Steve Hanlon Sept 30, 2017
*/

// returns list of activities offered
const getAllEvents = () => {
  return ['Marathon', 'Triathlon', 'Decathlon'];
};

// returns an activity
const getRandomEvent = () => {
  const allEvents = getAllEvents();
  const event = allEvents[Math.floor(Math.random() * allEvents.length)];
  return event;
};

// returns the details of the activity chosen
const getEventActivities = (event) => {
  const allEvents = getAllEvents();
  let activities;

  if (!allEvents.includes(event)) {
    return null;
  }

  if (event === 'Marathon') {
    activities = ['Running'];
    return activities.join(', ');
  }
  if (event === 'Triathlon') {
    activities = ['Running', 'Cycling', 'Swimming'];
    return activities.join(', ');
  }
  if (event === 'Decathlon') {
    activities = ['Running', 'Hurdles', 'Javelin throw', 'Discus Throw', 'Shot put', 'High Jump'];
    return activities.join(', ');
  }
};

// returns training times needed for activity
const getDaysToTrain = (event) => {
  const allEvents = getAllEvents();
  if (!allEvents.includes(event)) {
    return null;
  }
  const eventTrainingTimes = {'Marathon': 50, 'Triathlon': 100, 'Decathlon': 200 };
  return eventTrainingTimes[event];
};

// returns a message summary
const getEventMessage = () => {
  const myEvent = getRandomEvent();
  console.log('Your event is a ' + myEvent + '. Your event activities consist of ' + getEventActivities(myEvent) + '. You have ' + getDaysToTrain(myEvent) +  ' days to train.');
}

getEventMessage();
