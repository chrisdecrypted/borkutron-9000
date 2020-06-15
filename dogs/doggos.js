const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".doggos");

    function addNewDoggo() {
    const promise = fetch(DOG_URL);

    promise
      .then(function (response) {
        const processingPromise = response.json();
        return processingPromise;
      })

      .then(function (processedResponse) {
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "Random Image of Doggo";
        img.width = 350;
        doggos.appendChild(img);
      });
    }

      function removeDoggo() {
        location.reload();
        return false;
      };

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
document.querySelector(".remove-doggo").addEventListener("click", removeDoggo);

