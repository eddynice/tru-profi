import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import {Button } from '../Button';
;

 
const Drowdowncontainer = styled.div`
position:fixed;
z-index:999;
width:100%;
height:100%;
background:#000;
display:grid;
align-items:center;
top:0;
left:0;
transition:0.3s ease-in-out;
opacity:${({isOpen})=>(isOpen ? '1' : '0')};
top:${({ isOpen})=>(isOpen ? '0' : '-100%')};


`;

const Icon= styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;
const CloseIcon= styled(FaTimes)`
color: #000d1a;
`;
const DropDownWrapper= styled.div``;
const DropDownMenu= styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows: repeat(4, 80px);
text-align:center;
margin-bottom:4rem;

@media screen and (max-width:480px){
    grid-template-rows: repeat(4, 60px)
}
`;
const YLink= styled(Link)`
display:flex;
align-items:center;
justify-content:center;
color:#fff;
font-size:1.5rem;
text-decoration:none;
list-style:none;
color:#fff;
cursor:pointer;
transition:0.2s ease-in-out;

&:hover{
    color:red;
}

`;
const BtnWrap= styled.div`
display:flex;
justify-content:center;
`;


export default function Dropdown({toggle,isOpen,Logout}) {
    return (
       <Drowdowncontainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>

<CloseIcon/>


</Icon>
<DropDownWrapper>
<DropDownMenu>
    <YLink to="/timeline">Timeline </YLink>
    <YLink to="/detail">Detail </YLink>
    <YLink to="/about">About </YLink>


</DropDownMenu>
<BtnWrap>
    <Button onClick={()=>Logout()}  primary="true" >
       Logout
    </Button>
   
</BtnWrap>

</DropDownWrapper>
       </Drowdowncontainer>
    )
}


const Button=styled.button`
background: ${({primary})=>(
    primary? '#000d1a' : 'CD853F'
)};
white-space:nowrap;
outline:none;
border:none;
min-width:100px;
max-width:200px;
cursor:pointer;
text-decoration:none;
transition:0.3s;
display:flex;
justify-content:center;
align-items:center;
padding:${({big})=>(big? '16px 40px':'14px 24px')};
color:${({ primary})=>(primary? '#fff': '#000d1a')};
font-size: ${({big})=>(big ?'20px': '14px')};

&:hover{
    transform:translateY(-2px);
}

`