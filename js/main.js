let users = [
    {
        name: "John Doe",
        comment: " I recently acquired a Porsche 911 Carrera and am absolutely in love with its performance and sleek design! Does anyone else here have experience with this iconic model?",
        date: "23 February, 2023"
    },
    {
        name: "Emily Davis",
        comment: " I'm thinking of tuning my Ford Mustang to give it a more personalized touch. Any tips on performance improvements or styles that really stand out? I'm excited to hear your suggestions! ",
        date: "16 May, 2009"
    },
    {
        name: "Alex Johnson",
        comment: " Does anyone else keep a close eye on the latest developments in electric cars? Technology is advancing rapidly, and I'm eager to hear opinions on models like the Tesla Model 3 and Nissan Leaf. Which one do you think will lead the way in the future of electric vehicles?",
        date: "09 September, 2020"
    },
]

const COMMENT_FORM = document.querySelector('#comment-form')

COMMENT_FORM.addEventListener('submit', (event)=>{
    event.preventDefault()

    let datos = new Date()
    
    let dia = datos.getDay()
    let mes = datos.getMonth()
    let anio = datos.getFullYear()

    switch (mes) {
        case 1:
            mes = "Enero"
            break
        case 2:
            mes = "Febrero"
            break
        case 3:
            mes = "Marzo"
            break
        case 4:
            mes = "Abril"
            break
        case 5:
            mes = "Mayo"
            break
        case 6:
            mes = "Junio"
            break
        case 7:
            mes = "Julio"
            break
        case 8:
            mes = "Agosto"
            break
        case 9:
            mes = "Septiembre"
            break
        case 10:
            mes = "Octubre"
            break
        case 11:
            mes = "Noviembre"
            break
        case 12:
            mes = "Diciembre"
            break
    }

    const TEXT_AREA = event.target.textArea.value
    const INPUT_NAME = event.target.inputName.value

    users.push({
        name: INPUT_NAME,
        comment: TEXT_AREA,
        date: dia +" "+mes+", "+anio
    })

    console.log(users)
    
    showComment(INPUT_NAME, TEXT_AREA, dia, mes, anio)
})


function showComment(INPUT_NAME, TEXT_AREA, dia, mes, anio){
    const COMMENTS_CONTAINER = document.querySelector('#comments-container-group')

    let commentContainer = document.createElement('div')
    let commentPhotoContainer = document.createElement('div')
    let userCommentInfo = document.createElement('div')
    let userPhoto = document.createElement('i')
    let userName = document.createElement('p')
    let userComment = document.createElement('p')
    let userDate = document.createElement('p')

    userCommentInfo.appendChild(userName)
    userCommentInfo.appendChild(userComment)
    userCommentInfo.appendChild(userDate)

    commentPhotoContainer.appendChild(userPhoto)
    commentContainer.appendChild(commentPhotoContainer)
    commentContainer.appendChild(userCommentInfo)

    commentContainer.className = "container-fluid comments-container"
    commentPhotoContainer.className = "container col-1 col-sm-1 user-photo-container"
    userPhoto.className = "users-photos fa-regular fa-user"
    userCommentInfo.className = "container-fluid col-10 col-sm-10 users-containers"
    userName.className = "h2"
    userDate.className = "h4"


    userName.innerHTML=INPUT_NAME
    userComment.innerHTML=TEXT_AREA
    userDate.innerHTML=dia +" "+mes+", "+anio

    COMMENTS_CONTAINER.appendChild(commentContainer)
}

window.addEventListener('scroll', () => {
    const parallax = document.getElementById('parallax')
    const scrolled = window.scrollY
    parallax.style.transform = 'translateY(' + (scrolled * 0.4) + 'px)'
})