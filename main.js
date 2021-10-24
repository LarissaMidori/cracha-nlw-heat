const linksSocialMedia = {
  github: "LarissaMidori",
  youtube: "",
  facebook: "",
  instagram: "lamidoriarts",
  twitter: ""
}

// pegue cada li  que é filho da ul com id socialLinks
// quando escrito apenas socialLinks.children ele já entende que o socialLink é um elemento com id
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class'); 
// esse const só existe dentro dessa função assim como esse li
//const e let funcionam por escopo
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks() 

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json()) //pega a resposta do fetch e transforma a resposta em json
    //.then(data => alert(data.bio)) //pega a informação json da bio do usuario na propriedade bio na api do github
    .then(data => {
      username.textContent = data.name,
      userBio.textContent = data.bio,
      userLink.href = data.html_url //href muda o link
      userLogin.textContent = data.login
      userImage.src = data.avatar_url //src muda a src da imagem
    })
}

getGitHubProfileInfos()

//ARROW FUNCTIONS
//argumento => {}
//(argumento1, argumento2) => {}
