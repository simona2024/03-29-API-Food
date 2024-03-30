function init() {
    getRandomActivity()
    getMusicActivity()
    // getActivityByType ()
    // getActivityByPrice()
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

//   function getActivityByType () {
//     fetch('http://www.boredapi.com/api/activity?type=')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         const activityByType = data.type

//         console.log(activityByType)
//         const categoryForm = document.querySelector('#type-form')
//         const SelectElement = document.querySelector('#type')

//         const typeElemet = document.createElement('option')
//         typeElemet.textContent = activityByType
//         SelectElement.append(typeElemet) 
//         categoryForm.addEventListener('submit', (event) => {
//             event.preventDefoult()

//             const activityParagraph = document.querySelector('#activity-paragraph')
//             activityParagraph.textContent = 'Loading...'

//             const selectedType = event.target
//             console.log(selectedType)

//             fetch('http://www.boredapi.com/api/activity?type=${selectedType}')
//             .then(res => res.json())
//             .then(type => {
//                 activityParagraph.textContent = type
                
//             })
//     })
        
//     })
//    }

//   function getTypeActivity() {

//     const typeActivityButton = document.querySelector('#type-1')
  
//     typeActivityButton.addEventListener('click', () => {
    
//       fetch('http://www.boredapi.com/api/activity?type=music')
//         .then(res => res.json())
//         .then(data => {
//           console.log(data)
          
//           const music = data.activity
//         })
//     })
//     const typeForm = document.querySelector('#form-type')
//     typeForm.addEventListener('submit', (event)=> {
//         const form = event.target
//         const type = form.type.value

//         console.log('type', type )
//     })
//     // const musicActivityButton = document.querySelector('#music-activity-button')
  
//     // musicActivityButton.addEventListener('click', () => {
//     //   const musicParagraph = document.querySelector('#form-type')
//     //   musicParagraph.textContent = 'Loading...'
    
//     //   fetch('http://www.boredapi.com/api/activity?type=music')
//     //     .then(res => res.json())
//     //     .then(data => {
//     //       console.log(data)
          
//     //       musicParagraph.textContent = data.activity
//     //     })
//     // })
//   }



//   function getActivityByPrice() {
//     const priceItKnowledge = document.querySelector('it-knowledge')
//     priceItKnowledge.addEventListener('submit', () => {
//         fetch('http://www.boredapi.com/api/activity?minprice=0&maxprice=0.1')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//           priceItKnowledge.textContent = data['it-knowledge'].value
//     })
//     })
//   }

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