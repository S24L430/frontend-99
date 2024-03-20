(() => {
    function submitContactUsForm() {
      const username = document.getElementById("wknd-contact-us-form-username").value;
      const time = Date.now();
      const myRequest = new Request("/us/en/about-us.html?username=" + username + "&time=" + time);

      fetch(myRequest)
          .then((response) => {
              if (!response.ok) {
                  console.log(response);
                  document.getElementById("cmp-contactus-error").innerHTML = "Error: " + response.status;
              } else {
                  console.log(response.status);
                  window.location.href = "/us/en/about-us.html?username=" + username + "&time=" + time;
              }

              return response.blob();
          });
      }

      window.addEventListener('load', function () {
          console.log("loaded");
          document.getElementById("wknd-contact-us-form-submit").onclick = submitContactUsForm;
      });
  })();

// Stylesheets
import './main.scss';
