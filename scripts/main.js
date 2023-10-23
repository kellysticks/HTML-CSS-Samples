const url = "https://picsum.photos/v2/list"

//FETCH Random Photos
fetch(url)
.then((resp) => {
      if (resp.ok) {
        return resp.json();
      } else {
        console.log(`Something went wrong. ${resp.status}`);
      }
    })
    .then((jsonResp) => {
      console.log('response', jsonResp)
      assignImages(jsonResp)

    })
    .catch((err) => console.error('error error 2', err))
    .finally();

  function assignImages(imgs){
    const imgEls = document.querySelectorAll('img')
    let index
    imgEls.forEach(img => {
        index = Math.floor(Math.random() * imgs.length)
        if(img.height <= 1667){
          img.src = imgs[index].download_url
          img.alt = 'Stock Image ' + imgs[index].id
        }
    })
  }
