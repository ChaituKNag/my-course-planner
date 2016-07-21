/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import User from '../api/user/user.model';
import Syllabus from '../api/syllabus/syllabus.model';

Syllabus.find({}).removeAsync()
  .then(() => {
      Syllabus.createAsync({
          academy: "Business Training Academy",
          title: "Basic business etiquitee",
          education: "MBA, Second Year, 1st Semester",
          lecturer: "Naga Chaitanya K",
          objectives: "Learn how to behave and conduct business activities",
          iconurl: "http://image.flaticon.com/icons/svg/179/179319.svg",
          year: 2016,
          owner: '578f9f35e1b4d6d00e8cd877',
          weekplans: [{
              week: 1,
              summary: "Understand the class and students needs",
              topics: "<span>Dressning</span>",
              literature: "<p>Some literature that I will fill later</p>",
              videos: "<p>some stuff here</p>",
              assignments: "<p>Do this and then do that</p>",
              teaser: "<span> This is the teaser video dude"
          },{
              week: 2,
              summary: "Wonderfully the class and students needs",
              topics: "<span>Dressning</span>",
              literature: "<p>Some literature that I will fill later</p>",
              videos: "<p>some stuff here</p>",
              assignments: "<p>Do this and then do that</p>",
              teaser: "<span> This is the teaser video dude"
          }]
      },
      {
          academy: "Technology Training Academy",
          title: "Basic technical terms",
          education: "Computer Science, First Year, 2nd Semester",
          lecturer: "Sowjanya K",
          objectives: "Learn how to code",
          iconurl: "http://image.flaticon.com/icons/svg/179/179326.svg",
          year: 2012,
          owner: '578f9f35e1b4d6d00e8cd877',
          weekplans: [{
              week: 1,
              summary: "Understand the class and students needs",
              topics: "<span>Dressning</span>",
              literature: "<p>Some literature that I will fill later</p>",
              videos: "<p>some stuff here</p>",
              assignments: "<p>Do this and then do that</p>",
              teaser: "<span> This is the teaser video dude"
          }]
      });
  })
  .then(() => {
      console.log('finished populating the syllabus');
  });

User.find({}).removeAsync()
  .then(() => {
    User.createAsync({
      _id: '578f9f35e1b4d6d00e8cd876',
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      _id: '578f9f35e1b4d6d00e8cd877',
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
