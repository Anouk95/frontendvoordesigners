 var requestURL = 'https://open.data.amsterdam.nl/Attracties.json';
 var request = new XMLHttpRequest();

 request.open('GET', requestURL);

 request.responseType = 'json';
 request.send();

request.onreadystatechange = function() {
  if(this.readyState == 4 && this.status == 200) {
    showData(request.response)
  }
}

function showData(data) {
  console.log(data);
  for(var item of data) {
    console.log(item.details.nl)

    var container = document.createElement('section')
    container.classList.add('container')
    var filmtitel = document.createElement('h2')
    filmtitel.textContent = item.title
    filmtitel.classList.toggle('show')

    var foto = document.createElement('img')
    if(item.media.length > 0) {
      foto.src=item.media[0].url
    }
    foto.classList.toggle('show')

var button = document.createElement("button");
button.textContent = "beschrijving"
button.classList.toggle('show')

    var adres = document.createElement('p')
    adres.textContent=item.location.adress


    var details = document.createElement('p')
    details.textContent=item.details.nl.shortdescription



    var update = document.createElement('p')
    update.textContent=item.lastupdated


    var beschrijving = document.createElement('p')
    beschrijving.textContent=item.trcid

    var beschrijvingContainer = document.createElement('section')
    beschrijvingContainer.classList.add('beschrijvingContainer')
    beschrijvingContainer.appendChild(details)
    beschrijvingContainer.appendChild(adres)
    beschrijvingContainer.appendChild(update)
    beschrijvingContainer.appendChild(beschrijving)

    container.appendChild(filmtitel)
    container.appendChild(foto)
    container.appendChild(button)
    container.appendChild(beschrijvingContainer)
    document.querySelector('section').appendChild(container)

  }

  event()
}

function event () {
  var buttons = document.querySelectorAll('button')

  for(var button of buttons) {
    button.addEventListener('click', function(){
      var parent = this.parentElement
      parent.classList.toggle('active')
    })
  }
}
