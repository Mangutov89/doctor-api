import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';

import { GetMedicalForm } from './../src/api.js';

$(document).ready(function() {
  $("#medical-form").submit(function(event) {
  event.preventDefault();
  const symptomInput = $("#symptom").val();
  const doctorLast = $("#doctorLast").val();
  $("#symptom").val("");
  $("#doctorLast").val("");

    let newSymptom = new GetMedicalForm();
    let promise = newSymptom.getSymptom(doctorLast, symptomInput);

    promise.then(function(response) {
       let body =JSON.parse(response);
       if (body.data.length === 0) {
         $('#results').text("We could no find a doctor in your area to match those symptoms");
       } else {
          for (var i = 0 ; i < 20 ; i ++) {
            $("#results").append(`Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name} <br> Street: ${body.data[i].practices[0].visit_address.street} <br> ${body.data[i].practices[0].visit_address.city}, ${body.data[i].practices[0].visit_address.state} ${body.data[i].practices[0].visit_address.zip} <br> Phone Number: ${body.data[i].practices[0].phones[0].number} <br> <br>`);
         }
       }

    }, function(error) {
       $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
