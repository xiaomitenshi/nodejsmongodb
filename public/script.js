const inputTextDOM = document.getElementById("inputTitle");
const inputContentDOM = document.getElementById("inputContent");

const threadSectionDOM = document.querySelector(".thread-section");

const formDOM = document.querySelector(".form-section");

let inputText = "";
let inputContentText = "";


//Import all the threads

const getAllThreads = async () => {
    try{
        let allThreads = await axios.get("/api/v1/threads");
        console.log(allThreads);
        let { data } = allThreads;
        console.log(data);

        allThreads = data.map((thread) => {
            const { title, content } = thread;
            console.log(title, content);
            return `
            <div class="single-thread">
            <h3>${title}</h3>
            <p>${content}</p>
            </div>
            `;
        }).join("");
        threadSectionDOM.innerHTML = allThreads;
    }catch{
        console.log(err)
    }
}

getAllThreads();

//post message

inputTextDOM.addEventListener("change", (e) => {
    inputText = e.target.value;
});

inputContentDOM.addEventListener("change", (e) => {
    inputContentText = e.target.value;
});

formDOM.addEventListener("submit", async (e) => {
    e.preventDefault();

    if(inputText && inputContentText) {
        try{
            await axios.post("/api/v1/threads", {
                title: inputText,
                content: inputContentText
            });
            getAllThreads();
            
        }catch{
            console.log(err)
        }
    }
})