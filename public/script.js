const showTools = async() =>{
    const toolsJSON = await getTools();
    const toolsDiv = document.getElementById("tools-div");

    if (toolsJSON == ""){
        console.log("Invalid load of json.");
        return;
    }


    toolsJSON.forEach((tool) =>{
        const section = document.createElement("section");
        toolsDiv.append(section);

        const toolName = document.createElement("h2");
        toolName.innerHTML = tool.name;
        section.append(toolName);

        const creator = document.createElement("p");
        creator.innerHTML = "Creator: " + tool.creator;
        section.append(creator);

        const year = document.createElement("p");
        year.innerHTML = "Year founded: " + tool.year;
        section.append(year);

        const description = document.createElement("p");
        description.innerHTML = "Description: " + tool.description;
        section.append(description);

        const img = document.createElement("img");
        img.src = "https://server-side-json-8sgf.onrender.com/" + tool.img;
        section.append(img);
    })
}
const getTools = async() =>{
    try{
        return (await fetch("https://server-side-json-8sgf.onrender.com/api/tools")).json();
    }catch(error){
        console.log("error retrieving json");
        return "";
    }
}

window.onload = () =>{
    showTools();
}