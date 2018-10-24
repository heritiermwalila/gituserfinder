//Init Github

const github = new GitHub;

//Init UI

const ui = new UI;

//search input
const searchUser = document.getElementById('searchUser');

//search input event listener

searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;

    if(userText !==''){
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
                ui.showAlert('User no found', 'alert alert-danger');
            }else{
                //show profile

                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    }else{
        //clear the profile

        ui.clearProfile();
    }
})