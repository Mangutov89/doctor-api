export class GetSymptom {
  getSymptom(artist) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://theaudiodb.com/api/v1/json/${process.env.API_KEY}/search.php?s=${artist}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
