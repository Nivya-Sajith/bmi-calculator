



function calculate(event)
{event.preventDefault();
    // let gender=
    let weight=document.getElementById('weight').value
    let height=document.getElementById('height').value
    console.log(weight);
    let age=document.getElementById('age').value
    let male=document.getElementById('male')
    let female=document.getElementById('female')

    
    if(height==''|| weight=='' ||age=='' ||(male.checked==false && female.checked==false))
    {
        alert("please fill the inputs!!")
        
    }
else{


    // BMI=weight(km)/(height(m)*height(m))
    height=height/100;
    let bmi=(weight/(height**2)).toFixed(2);
    console.log(bmi);
    document.getElementById('result').innerHTML=bmi;
    let cmd=" ";
    if(bmi>18.4 && bmi<25)
    {
        cmd='Normal'
    }
    else if(bmi>=25 && bmi<30)
    {
        cmd='Overweight'
    }
    else if(bmi>=30 && bmi<40)
    {
        cmd='Obese'
    }
    else if(bmi=>40)
    {
cmd='Morbidly Obese'
    }
    console.log(cmd);
    
    
    document.getElementById('comment').innerHTML=cmd;

}}