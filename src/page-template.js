const createTeam = (team) => {
    const createManager = (manager) => {
        return `
        <div class=" col d-flex justify-content-center">
            <div class="card" style="width: 18rem">
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item heading">${manager.getName()}</li>
                        <i class="fa-solid fa-user">${manager.getRole()}</i>
                        <li class="list-group-item">${manager.getId()}</li>
                        <li class="list-group-item">${manager.getEmail()}</li>
                        <li class="list-group-item">${manager.getOfficeNum()}</li>
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
                    <li class="list-group-item heading">${engineer.getName()}</li>
                    <i class="fa-solid fa-user">${engineer.getRole()}</i>
                    <li class="list-group-item">${engineer.getId()}</li>
                    <li class="list-group-item">${engineer.getEmail()}</li>
                    <li class="list-group-item">${engineer.getGitHub()}</li>
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
    <link rel="'stylesheet" href="./styles/reset.css" />
    <link rel="'stylesheet" href="./styles/style.css" />

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
