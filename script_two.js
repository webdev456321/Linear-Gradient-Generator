var input1=document.getElementsByTagName('input')[0];
var input2=document.getElementsByTagName('input')[1];
var body=document.getElementsByTagName('body')[0];
var form1=document.getElementsByTagName('form')[0];
var form2=document.getElementsByTagName('form')[1];
var p_one=document.querySelectorAll('p')[0];
var b=document.querySelectorAll('h5')[0];

const afterClick=()=>{
            form2.textContent=''
            
            const input3=document.createElement('input');
            input3.setAttribute('type','text')
            input3.setAttribute('name','textbox')
            input3.setAttribute('placeholder','Enter direction')
            input3.setAttribute('style',"width:50%;margin-left:20px;")
            const br1=document.createElement('br')
            form2.appendChild(input3)
            form2.appendChild(br1)

            const label1=document.createElement('label');
            label1.setAttribute('for','customRange1')
            label1.setAttribute('style','padding-right:10px;')
            label1.textContent='Degree range'
            form2.appendChild(label1)

            const input4=document.createElement('input');
            input4.setAttribute('type','range');
            input4.setAttribute('id','customRange1')
            input4.max=360
            input4.min=-360
            form2.appendChild(input4)

            const button1=document.createElement('button');
            button1.type='button'
            button1.textContent='Submit'
            button1.setAttribute('style','margin-left:5px;')
            form2.appendChild(button1)

            const br2=document.createElement('br')
            const br3=document.createElement('br')
            form2.appendChild(br2)
            form2.appendChild(br3)

            const input5=document.createElement('input')
            input5.type='color'
            input5.name='colour1'
            input5.setAttribute('class','edit3')
            input5.disabled=true
            form2.appendChild(input5)

            const input6=document.createElement('input')
            input6.type='color'
            input6.name='colour2'
            input6.setAttribute('class','edit3')
            input6.disabled=true
            form2.appendChild(input6)

            b.textContent=`Note:After Entering a specific direction or an angle, click on any palette and drag the circular pointer.
            You can enter the degrees manually or use degree range`;
            var textbox_1=document.getElementsByTagName('input')[2];
            var range1=document.querySelectorAll('input')[3];

             range1.addEventListener('input',()=>{
                textbox_1.value=range1.value+'deg';
            })


}

const colourChange=()=>{
            var colour1=document.querySelectorAll('input')[4];
            var colour2=document.querySelectorAll('input')[5]

                 colour1.addEventListener('input',()=>{
                    body.style.background=`linear-gradient(${value1},${colour1.value},${colour2.value})`;
                    p_one.textContent=body.style.background+';';
                 })
                
                colour2.addEventListener('input',()=>{
                    body.style.background=`linear-gradient(${value1},${colour1.value},${colour2.value})`;
                    p_one.textContent=body.style.background+';';
                 })
}

input1.addEventListener('click',()=>{  
            afterClick();
            var colour1=document.querySelectorAll('input')[4];
            var colour2=document.querySelectorAll('input')[5]
            var button2=document.querySelectorAll('button')[0];
            colour1.value='#00ffff';
            colour2.value='#0000ff';
            button2.addEventListener('click',()=>{
                let value1=''
                value1=value1+textbox_1.value
                if(textbox_1.value===''){
                    b.textContent="Enter proper angle or direction"
                    colour1.disabled=true;
                    colour2.disabled=true;
                }
                else{
                b.textContent=`The direction is ${textbox_1.value}`;
                textbox_1.value=''
                colour1.disabled=false;
                colour2.disabled=false;
                }
            colourChange();
            })

            }
            
)
        
input2.addEventListener('click',()=>{   
            
    afterClick();
    const input7=document.createElement('input')
    input7.type='color'
    input7.name='colour3'
    input7.setAttribute('class','edit3')
    input7.disabled=true
    form2.appendChild(input7);
            var colour1=document.querySelectorAll('input')[4];
            var colour2=document.querySelectorAll('input')[5]
            var colour3=document.querySelectorAll('input')[6];
            var button2=document.querySelectorAll('button')[0];
            colour1.value='#00ffff';
            colour2.value='#0000ff';
            colour3.value='#d3fc0a';
            button2.addEventListener('click',()=>{
                let value1=''
                value1=value1+textbox_1.value
                if(textbox_1.value===''){
                    b.textContent="Enter proper angle or direction"
                    colour1.disabled=true;
                    colour2.disabled=true;
                    colour3.disabled=true;
                }
                else{
                b.textContent=`The direction is ${textbox_1.value}`;
                textbox_1.value=''
                colour1.disabled=false;
                colour2.disabled=false;
                colour3.disabled=false;
                }
            colourChange();
                 colour3.addEventListener('input',()=>{
                    body.style.background=`linear-gradient(${value1},${colour1.value},${colour2.value},${colour3.value})`;
                    p_one.textContent=body.style.background+';';
                 })
            })

                
                
})
