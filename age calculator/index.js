const btnEle = document.getElementById("btn")
const birthdayEle = document.getElementById("birthday")
const resultEle = document.getElementById("result")

function calculateAge(){
    const birthdayValue = birthdayEle.value;
    if(birthdayValue === ""){
        alert("enter birthdate!!!")
    }
    else{
        const age = getAge(birthdayValue)
        resultEle.innerText = `Your age is ${age} ${age>1 ? "years" : "year"} old`;
        console.log(resultEle.innerText = `Your age is ${age} ${age>1 ? "years" : "year"} old`);
    }
}

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();

    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month<0 || (month === 0 && currentDate.getDate()< birthdayDate.getDate())){
        age--;
    }

    return age;
}


btnEle.addEventListener("click", calculateAge)


