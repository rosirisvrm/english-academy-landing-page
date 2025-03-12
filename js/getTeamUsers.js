document.addEventListener("DOMContentLoaded", function () {
    
    let teamUsers = [];

    fetch('https://dummyjson.com/users?limit=4')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            teamUsers = data.users;

            const teamMembers = document.getElementsByClassName('team-image-column');
            
           Array.from(teamMembers).forEach((member, index) => {
                member.innerHTML += `
                    <h5 class="text-center">
                        ${teamUsers[index].firstName} ${teamUsers[index].lastName}
                    </h5>
                    <p class="text-center m-0">
                        ${teamUsers[index].company.title}
                    </p>
                `;
           });
    });
});