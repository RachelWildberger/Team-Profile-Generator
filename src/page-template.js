const createTeam = (team) => {
    const createManager = (manager) => {
        return `
        <div class=" col d-flex justify-content-center">
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <ul class="list-group">
                    <i class="fa-solid fa-desktop"></i>
                    <li class="list-group-item heading">${manager.getName()}</li>
                    <li class="list-group-item">${manager.getRole()}</li> 
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <a href="mailto:email@example.com" class="list-group-item">Email: ${manager.getEmail()}</a>
                    <li class="list-group-item">Office number: ${manager.getOfficeNum()}</li>
                    </ul>
                </div>
            </div>  
        </div>      
        `;
    };
    const createEngineer = (engineer) => {
        return `
        <div class=" col d-flex justify-content-center">
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <ul class="list-group">
                    <i class="fa-solid fa-file-code"></i>
                    <li class="list-group-item heading">${engineer.getName()}</li>
                    <li  class="list-group-item">${engineer.getRole()}</li> 
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <a href="mailto:email@example.com" class="list-group-item">Email: ${engineer.getEmail()}</a> 
                    <a href="https://github.com/" class="list-group-item">GitHub: ${engineer.getGitHub()}</a>
                    </ul>
                </div>
            </div>  
        </div>      
        `;
    };

    const createIntern = (intern) => {
        return `
        <div class=" col d-flex justify-content-center">
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <ul class="list-group">

                    <i class="fa-solid fa-mug-hot"></i>
                    <li class="list-group-item heading">${intern.getName()}</li>
                    <li  class="list-group-item">${intern.getRole()}</li> 
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <a href="mailto:email@example.com" class="list-group-item">Email: ${intern.getEmail()}</a> 
                    <li class="list-group-item">${intern.getSchool()}</li>

                    </ul>
                </div>
            </div>  
        </div>      
        `;
    };
    const html = [];

    html.push(
        team
            .filter((teamMember) => teamMember.getRole() === "Manager")
            .map((manager) => createManager(manager))
            .join("")
    );
    html.push(
        team
            .filter((teamMember) => teamMember.getRole() === "Engineer")
            .map((engineer) => createEngineer(engineer))
            .join("")
    );
    html.push(
        team
            .filter((teamMember) => teamMember.getRole() === "Intern")
            .map((intern) => createIntern(intern))
            .join("")
    );
    return html.join("");
    
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
        <link rel="stylesheet" href="./styles/reset.css" />
        <link rel="stylesheet" href="./styles/style.css" />
        <script src="https://kit.fontawesome.com/f3d669e5cc.js" crossorigin="anonymous"></script>
        <title>Team Profile Generator</title>
    </head>
    
    <body>
    <h1>Team Profile Generator</h1>
    <div class="container text-center">
        <div class="row">
        ${createTeam(team)}
        </div>
    </div>
</body>
</html>
    `;

};
