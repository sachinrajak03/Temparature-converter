const From=document.querySelector('[From]')
const To=document.querySelector('[To]')
const Input=document.querySelector('[Input]')
const OutputField=document.querySelector('[output]')


// for default options 
updateDropdownOptions('dropdown2', From.value)
updateDropdownOptions('dropdown1', To.value)


// to make sure no two selected values are same....
function updateDropdownOptions( otherDropdownId, selectedValue) {
    var otherDropdown = document.getElementById(otherDropdownId);

    // Enable all options in the other dropdown
    console.log(otherDropdown);
    console.log(otherDropdown.options.length);
    for (var i = 0; i < otherDropdown.options.length; i++) {
      otherDropdown.options[i].disabled = false;
    }

    // Disable the selected option in the other dropdown
      for (var i = 0; i < otherDropdown.options.length; i++) {
        if (otherDropdown.options[i].value === selectedValue) {
          otherDropdown.options[i].disabled = true;
          break;
        }
      }

  }

//   Convertion 
function convert()
{
    
    const FromValue=Input.value;
    var ToValue=0

    // kelvin to 
    if(From.value=="Kelvin")
    {

        
        if(To.value=="Celcius")
        ToValue=FromValue-273.15;

        else
        ToValue=(9/5)*(FromValue-273.15)+32;
        

    }
    // Celcius to 
    else if(From.value=="Celcius")
    {

        if(To.value=="Fahrenheit")
            ToValue= FromValue*(9/5)+32 ;
            
        else
            ToValue=FromValue + 273.15

    }

    // fahrenheit to
    else{

        if(To.value=="Celcius")
        ToValue=[(FromValue-32)*5]/9;
        
        else  
        ToValue=(FromValue-32)*(5/9)+273.15;
    }


    OutputField.value=ToValue.toPrecision(4);
}
