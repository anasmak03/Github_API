let submit = document.getElementById('submit');
let container = document.getElementById('container');
let section2 = document.querySelector('.section2')
let input = document.getElementById('user').value
submit.addEventListener("click", function(e) {
e.preventDefault()
 let input = document.getElementById('user').value
 if (input == "")
{
    alert("Please Enter a username")
}
 
    else{
    
    fetch(`https://api.github.com/users/${input}`)
    .then(response => response.json())
    .then(user => {

        let img = document.createElement('img')
        img.src=user.avatar_url;
        img.style.height = "200px";
        img.style.width = "200px";
        img.style.borderRadius = '50%';
        img.style.marginLeft = '20px';
        img.style.display="block"
        img.style.margin="0 auto"
        img.style.marginTop="50px";
        img.style.paddingBottom="15px"
        container.appendChild(img)

        let name = document.createElement('p')
        name.textContent= `Your name : ${user.name}`
        name.style.textAlign="center";
        name.style.paddingBottom="15px"
        name.style.fontWeight="700"
        section2.appendChild(name)

        let username = document.createElement('p')
        username.textContent= `Username : ${user.login}`
        username.style.textAlign="center"
        username.style.paddingBottom="15px"
        username.style.fontWeight="700"
        section2.appendChild(username)

        let location = document.createElement('h4')
        location.textContent=`Location : ${user.location}`
        location.style.textAlign="center"
        location.style.paddingBottom="15px"
        section2.appendChild(location)

        let bio = document.createElement('p')
        bio.textContent=`Bio : ${user.bio}`
        bio.style.textAlign="center"
        bio.style.paddingBottom="15px"
        bio.style.fontWeight="bolder"
        section2.appendChild(bio)
        
        let folloowers = document.createElement('p')
        folloowers.textContent=`Followers : ${user.followers}`
        
        folloowers.style.paddingBottom="15px"
        folloowers.style.textAlign="center"
        
        folloowers.style.fontWeight="bolder"
        section2.appendChild(folloowers)


        let flowing = document.createElement('p')
        flowing.textContent=`Following : ${user.following}`;
        flowing.style.textAlign="center";
        
        flowing.style.paddingBottom="15px"
        flowing.style.fontWeight="bolder"
      
        section2.appendChild(flowing)

        let repos = document.createElement('p')
        repos.textContent=`Repos : ${user.public_repos}`
     
        repos.style.fontWeight="bolder"
        repos.style.textAlign="center"
        section2.appendChild(repos)
    })
}
    })
