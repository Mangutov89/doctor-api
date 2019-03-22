import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';

import { GetSymptom } from './../src/api.js';

$(document).ready(function() {
  $("#medical-form").submit(function(event) {
  event.preventDefault();
  const symptomInput = $("#symptom").val();
  $("#symptom").val("");

    let newSymptom = new GetSymptom();
    let promise = newSymptom.getSymptom(symptomInput);

    promise.then(function(response) {
       let body =JSON.parse(response);
       console.log(body.data);

       $('#results-bio').text(`Learn more about this artist: ${body}`);

    }, function(error) {
       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
