const Input = document.getElementById("wrapping-inputs");

const Name = document.getElementById("name");

const Usia = document.getElementById("Usia");

const Height = document.getElementById("Height");

const Weight = document.getElementById("Weight");

const hasil = document.getElementById("hasil");

Input.addEventListener('submit',(event)=>
{
    event.preventDefault();
    validation();
},false);

function validation()
{
    const nameValue = Name.value.trim();
    const usiaValue = Usia.value.trim();
    const HeightValue = Height.value.trim();
    const WeightValue = Weight.value.trim();
    // nama
    if(nameValue === "")
    {
        setError(Name , "Nama tidak boleh kosong");
        return false;
    }
    else if(!isNaN(nameValue))
    {
        setError(Name , "hanya characters");
        return false;
    }
    else if(!letterText(nameValue))
    {
        setError(Name , "format ini tidak valid");
        return false;
    }
    else if(!alphabet(nameValue))
    {
        setError(Name , "format ini tidak valid");
        return false;
    }
    else
    {
        setSucess(Name);
    }

    // usia
    if(usiaValue === "")
    {
        setError(Usia , "Usia tidak boleh kosong");
        return false;
    }
    else if(!isNaN(usiaValue))
    {
        setSucess(Usia);
        
    }
    else
    {
        setError(Usia , "hanya angka");
        return false;
    }

    // height
    if(HeightValue === "")
    {
        setError(Height , "tinggi tidak boleh kosong");
        return false;
    }
    else if(!isNaN(HeightValue))
    {
        setSucess(Height);
        
    }
    else
    {
        setError(Height , "hanya angka");
        return false;
    }

    // berat
    if(WeightValue === "")
    {
        setError(Weight , "tinggi tidak boleh kosong");
        return false;
    }
    else if(!isNaN(WeightValue))
    {
        setSucess(Weight);
        
    }
    else
    {
        setError(Weight , "hanya angka");
        return false;
    }

    if(nameValue != "" && usiaValue != "" && HeightValue != "" && WeightValue != "")
    {
        let h = document.getElementById("Height").value;
        let w = document.getElementById("Weight").value;
        let h2 = h/100;
        let BMI = w / (h2 ** 2);
        let BMIFIX = (BMI.toFixed(2));
        bmi(hasil , "BMI kamu Adalah : " + BMIFIX ) 
        const neddle = document.querySelector(".box-wrap .box .wrapping-input .information  .meters .neddle .ndl");
        if(BMIFIX < 18.5 )
        {
            neddle.style.transform = "rotate(" + (BMIFIX * 2.36) + "deg)";
            document.getElementById("hasil").style.color = "red";
        }
        else if(BMIFIX > 18.5 && BMIFIX < 22.9 )
        {
            // 3.85
            document.getElementById("hasil").style.color = "green";
        }
        else if(BMIFIX > 22.9 && BMIFIX < 29.9 )
        {
            document.getElementById("hasil").style.color = "#ffa500";
        }
        else 
        {
            document.getElementById("hasil").style.color = "red";
        }

        if(BMIFIX > 18.5 && BMIFIX < 19.6 )
        {
            neddle.style.transform = "rotate(" + ((BMIFIX * 0.5625 ) + (45)) + "deg)";
        }
        if (BMIFIX > 19.6 && 20.7 )
        {
            neddle.style.transform = "rotate(" + ((BMIFIX * 0.5625 ) + (45 + 5.625)) + "deg)";
        }
        if (BMIFIX > 20.7 && 21.8 )
        {
            neddle.style.transform = "rotate(" + ((BMIFIX * 0.5625 ) + (50.625 +  5.625 + 3.75)) + "deg)";
        }
        if (BMIFIX > 21.8 && 22.9 )
        {
            let hasil = 50.625 +  5.625 + 3.75;
            neddle.style.transform = "rotate(" + ((BMIFIX * 0.5625 ) + (hasil + 5.625 + 4.625 + 0.75685 )) + "deg)";
        }

        // $(".box-wrap .box .wrapping-input .information").toggleClass("information-normal");
        // $(".box-wrap .informationresponsive").toggleClass("informationresponsive-normal");


        

     
    }
}

$("#wrapping-inputs input[type=text]").on('keyup' , function ()
{
    const nameValue = Name.value.trim();
    const usiaValue = Usia.value.trim();
    const HeightValue = Height.value.trim();
    const WeightValue = Weight.value.trim();
    // nama
    if(nameValue === "")
    {
        setError(Name , "Nama tidak boleh kosong");
        return false;
    }
    else if(!isNaN(nameValue))
    {
        setError(Name , "hanya characters");
        return false;
    }
    else if(!letterText(nameValue))
    {
        setError(Name , "format ini tidak valid");
        return false;
    }
    else if(!alphabet(nameValue))
    {
        setError(Name , "format ini tidak valid");
        return false;
    }
    else
    {
        setSucess(Name);
    }

    // usia
    if(usiaValue === "")
    {
        setError(Usia , "Nama tidak boleh kosong");
        return false;
    }
    else if(!isNaN(usiaValue))
    {
        setSucess(Usia);
        
    }
    else
    {
        setError(Usia , "hanya angka");
        return false;
    }

    // height
    if(HeightValue === "")
    {
        setError(Height , "tinggi tidak boleh kosong");
        return false;
    }
    else if(!isNaN(HeightValue))
    {
        setSucess(Height);
        
    }
    else
    {
        setError(Height , "hanya angka");
        return false;
    }

    // berat
    if(WeightValue === "")
    {
        setError(Weight , "tinggi tidak boleh kosong");
        return false;
    }
    else if(!isNaN(WeightValue))
    {
        setSucess(Weight);
        
    }
    else
    {
        setError(Weight , "hanya angka");
        return false;
    }


})
function setError(input , messege ) 
{
    const inputfield = input.parentElement;
    const small = inputfield.querySelector("small");
    small.innerText = messege;
    inputfield.className = 'input errors'

}

function bmi(hasils , messege ) 
{
    const inputfield = hasils.parentElement;
    const small = inputfield.querySelector("small");
    small.innerText = messege;
    inputfield.className = 'wrap-hasil sucess'

}

function setSucess(input)
{
    const inputfield = input.parentElement;

    inputfield.className = 'input success'

}

function letterText(string) 
{
    string = string.toLowerCase()

    let valid = true;
    Array.from(string).forEach((event) => 
    {
        if(event < 'a' || event > 'z') valid=false
        if(event == ' ') valid = true
    })
    return valid
}

function alphabet(string)
{
    if(typeof(string)!=='string')
    {
        return false;
    }
    for(var i=0;i<string.length;i++)
    {
        if(string.charCodeAt(i)>127)
        {
            return false;
        }
        else if(string.charCodeAt(i) > 32 && string.charCodeAt(i) < 65 )
        {
            return false;
        }
        else if(string.charCodeAt(i) > 90 && string.charCodeAt(i) < 97 )
        {
            return false;
        }
        else if(string.charCodeAt(i) > 122 && string.charCodeAt(i) < 127 )
        {
            return false;
        }
    }
    return true;
}