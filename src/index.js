import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';

import { GetMedicalForm } from './../src/api.js';

$(document).ready(function() {
  $("#medical-form").submit(function(event) {
  event.preventDefault();
  const symptomInput = $("#symptom").val();
  $("#symptom").val("");

    let newSymptom = new GetMedicalForm();
    let promise = newSymptom.getSymptom(symptomInput);

    promise.then(function(response) {
       let body =JSON.parse(response);
       console.log(body.data[0].profile.image_url);
       if (body.data.length < 0) {
         $('#results').text("We could no find a doctor in your area to match those symptoms");
       } else {
          for (var i = 0 ; i < 20 ; i ++) {
            $("#results").html(`here is a picture <img src="${body.data[i].profile.image_url}">`)
         }
       }

    }, function(error) {
       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
