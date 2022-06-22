
function deleteDashboard(value,e){
    fetch(`/users/delete/${value}`, {
        method: 'GET',
       })
        .then( (data) => {
            data = data.json();
            data.then((resp) =>{
                if (resp.message == 'success') {
                    e.target.closest('tr').remove()
                }
            });
        })
        .catch(function (error) {
            console.log(error)
        })
}

function deleteEducation(value,e){
    fetch(`/users/delet/${value}`, {
        method: 'GET',
    })
        .then( (data) => {

            data = data.json();
            data.then((resp) =>{
                if (resp.message == 'successs') {
                    e.target.closest('tr').remove()
                }
            });
        })
        .catch(function (error) {
            console.log(error)
        })
}