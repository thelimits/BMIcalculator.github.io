
$(document).ready(function()
{
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
            const neddleres = document.querySelector(".box-wrap .informationresponsive  .meters .neddle .ndl");
            if(BMIFIX < 18.5 )
            { 
                document.getElementById("hasil").style.color = "red";
            }
            else if(BMIFIX > 18.5 && BMIFIX < 22.9 )
            {
                document.getElementById("hasil").style.color = "green";
            }
            else if(BMIFIX > 22.9 && BMIFIX < 29.9 )
            {
                document.getElementById("hasil").style.color = "#ffa500";
            }
            else if(BMIFIX > 29.9)
            {
                document.getElementById("hasil").style.color = "red";
            }
            if (BMIFIX > 0  &&  BMIFIX < 48.5)
            {
                let rotate = (180 / (30 + 18.5));
                neddle.style.transform = "rotate(" + (BMIFIX * rotate) + "deg)";
                neddleres.style.transform = "rotate(" + (BMIFIX * rotate) + "deg)";
            }
            if (BMIFIX <= 0)
            {
                neddle.style.transform = "rotate(0deg)";
                neddleres.style.transform = "rotate(0deg)";
            }
            if(BMIFIX > 48.5)
            {
                neddle.style.transform = "rotate(180deg)";
                neddleres.style.transform = "rotate(180deg)";
            }
            
            $(".box-wrap .box .wrapping-input .information").addClass("information-normal");
            $(".box-wrap .informationresponsive").addClass("informationresponsive-normal");
        
            let formdata = {
                name:nameValue,
                usia:usiaValue,
                tinggi:HeightValue,
                berat:WeightValue,
                BMI:BMIFIX
            }

            $.ajax({
                method: 'GET',
                url: 'https://thelimits.github.io/BMIcalculator.github.io/',
                dataType: 'jsonp', //change the datatype to 'jsonp' works in most cases
                success: (res) => {
                 console.log(res);
                }
            })
            
            $.ajax({url:'http://localhost/BMIcalculator/API/data.php',method:'POST',data:formdata,success:function(response)
                {
                    var res = JSON.parse(response);
                    console.log(res);
                } 
            
            });
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

});