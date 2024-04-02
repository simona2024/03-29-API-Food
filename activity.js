function init() {
    getRandomActivity()
    getMusicActivity()
    getActivityBykey()
  }
  
  init()
  
  function getRandomActivity() {
    const randomActivityButton = document.querySelector('#random-activity-button')
  
    randomActivityButton.addEventListener('click', () => {
      const activityParagraph = document.querySelector('#activity-paragraph')
      activityParagraph.textContent = 'Loading...'
    
      fetch('http://www.boredapi.com/api/activity/')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          
          activityParagraph.textContent = data.activity
        })
    })
  }

  function getMusicActivity() {
    const musicActivityButton = document.querySelector('#music-activity-button')
  
    musicActivityButton.addEventListener('click', () => {
      const musicParagraph = document.querySelector('#music-paragraph')
      musicParagraph.textContent = 'Loading...'
    
      fetch('http://www.boredapi.com/api/activity?type=music')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          
          musicParagraph.textContent = data.activity
        })
    })
  }

 
  function getActivityBykey() {
    const form = document.querySelector('#search-form')
    

    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const keyParagraph = document.querySelector('#key-paragraph')
        keyParagraph.textContent = 'Loading...'

        const searchKey = event.target.elements.search.value

        fetch('http://www.boredapi.com/api/activity?${searchKey}')
        .then(res => res.json())
        .then(data => {
            keyParagraph.textContent = data.activity
            console.log(data.activity)
           
        })
    })

   }