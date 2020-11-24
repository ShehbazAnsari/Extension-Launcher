//Modal Social Media
const youtubeModal = document.getElementById('youtube')
const facebookModal = document.getElementById('facebook')
const githubModal = document.getElementById('github')
const linkedinModal = document.getElementById('linkedin')
const blogModal = document.getElementById('blog')
const twitterModal = document.getElementById('twitter')
const saveModal = document.getElementById('save')
const closeModal = document.getElementById('close')

//Font Social Media
const youtubeFont = document.getElementById('youtubeFont')
const facebookFont = document.getElementById('facebookFont')
const githubFont = document.getElementById('githubFont')
const linkedinFont = document.getElementById('linkedinFont')
const blogFont = document.getElementById('blogFont')
const twitterFont = document.getElementById('twitterFont')


//Getting Value Of Modal In Font Social Media Via LocalStorage
youtubeFont.href = localStorage.getItem('youtube')
facebookFont.href = localStorage.getItem('facebook')
githubFont.href = localStorage.getItem('github')
linkedinFont.href = localStorage.getItem('linkedin')
blogFont.href = localStorage.getItem('blog')
twitterFont.href = localStorage.getItem('twitter')

saveModal.addEventListener('click', function () {

    //Modal Socail Media Value
    const youtubeModalValue = youtubeModal.value
    const facebookModalValue = facebookModal.value
    const githubModalValue = githubModal.value
    const linkedinModalValue = linkedinModal.value
    const blogModalValue = blogModal.value
    const twitterModalValue = twitterModal.value


    // Storing Modal Value In LocalStorage  
    localStorage.setItem("youtube", youtubeModalValue)
    localStorage.setItem("facebook", facebookModalValue)
    localStorage.setItem("github", githubModalValue)
    localStorage.setItem("linkedin", linkedinModalValue)
    localStorage.setItem("blog", blogModalValue)
    localStorage.setItem("twitter", twitterModalValue)

    //Setting Value Of Modal In Font Social Media
    youtubeFont.href = youtubeModalValue
    facebookFont.href = facebookModalValue
    githubFont.href = githubModalValue
    linkedinFont.href = linkedinModalValue
    blogFont.href = blogModalValue
    twitterFont.href = twitterModalValue

    // //Clearing Modal Social Media Details From Form

    // youtubeModal.value = ""
    // facebookModal.value = ""
    // githubModal.value = ""
    // linkedinModal.value = ""
    // blogModal.value = ""
    // twitterModal.value = ""

})

closeModal.addEventListener('click', function () {
    //Modal Socail Media Value Setting Empty
    youtubeModal.value = ""
    facebookModal.value = ""
    githubModal.value = ""
    linkedinModal.value = ""
    blogModal.value = ""
    twitterModal.value = ""
})