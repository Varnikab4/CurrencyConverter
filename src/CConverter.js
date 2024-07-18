import {useState, useRef} from "react";
import axios from "axios";

function CConverter(){
    const rAmt = useRef();
    const[amt, setAmt] = useState("");
    const[msg, setMsg] = useState("");

    const hAmt = (event)=>{
        setAmt(event.target.value);
    }

    const CC = (event) => {
        event.preventDefault();
        if(amt == ""){
            alert("You did not enter amount");
            rAmt.current.focus();
            return;
        }


        let a = parseFloat(amt);

        let url = "https://api.exchangerate-api.com/v4/latest/USD";
        axios.get(url)
        .then(res=>{
            let dollar = res.data.rates.INR;
            let amount = dollar*a;
            let ans = "\u20b9" +amount.toFixed(2);
            setMsg(ans);

        })
        .catch(err =>alert("issue"+err));

    }
    return(
        <>
        <center>
            <h1>CURRENCY CONVERTER APP <span>~ By Varnika Bhoga</span></h1>
            <form onSubmit={CC}>
                <input type = "number" placeholder = "Enter amount in $$" onChange={hAmt}></input>
                <br/><br/>
                <input type = "submit" value ="Convert" id="btn"></input>
                <h2 id="msg">{msg}</h2>

            </form>
        </center>
        </>

    );
}export default CConverter