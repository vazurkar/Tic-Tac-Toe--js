let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newgame = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 =true;

const winpattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
]



boxes.forEach((box) =>
{
    box.addEventListener("click", () =>
    {
        console.log("box is clicked");
        
        if(turn0) //player1
        {
            box.innerText="O";
            box.style.color= "green";
            turn0=false;
        }
        else //player2
        {
            box.innerText="X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
}
);

const boxenabled = () =>
{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
    }
   


const boxdisabled = () =>
{
    for(let box of boxes)
    box.disabled = true;
}


const showwinner =(winner) =>
{
    msg.innerText = `Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxdisabled();
}

const checkwinner = () =>
{
    for(let pattern of winpattern )
    {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if( pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                //console.log("WINNER",pos1val);
                showwinner(pos1val);
                
            }
        }
    }
}
const resetgame = ()=>
{
    turn0 = true;
    boxenabled();
    msgcontainer.classList.add("hide");
    
}
newgame.addEventListener("click", resetgame);
reset.addEventListener("click" , resetgame);