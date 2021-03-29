import React from 'react';
import styled, {css} from 'styled-components/';
import { Link,withRouter } from 'react-router-dom'
//import {menuData} from './data/menuData';
import logo from "../../images/Logo.jpg";
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
height:50px;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:100;
position:fixed;
width:100%;
background: #f8f9fa!important;

`;
const NavLink = css`
color:#000;
display:flex;
align-items:center;
padding:0 1rem;
height:100%;
cursor:pointer;
text-decoration:none;

&:hover{
    text-decoration:none;
}
`;

const Logo=styled.img`
${NavLink}
font-style:italic;
padding-top:-35px;
height:40px;
width:120px
object-fit:cover;

`;

const MenuBars=styled(FaBars)`
 display:none;

    cursor:pointer;
   
    top:0;
    right:0;
    
 
@media screen and (max-width:768px){
    display:block
   
   
   

   
    

}
 `; 
const NavMenu= styled.div`
display:flex;
align-items:center;
margin-right:-40px;

@media screen and (max-width:768px){
    display:none
}
`

const NavMenuLink = styled(Link)`
${NavLink}
`;

const NavBtn = styled.div`
display:flex;
align-itens:center;
margin-right:24px;

&:hover{
    text-decoration:none;
}

@media screen and (max-width:768px){
    display:none
}
`



 function Navbar({toggle,Logout}) {
    return (
        
        <Nav>
            <Link to="/timeline">
            <Logo src={logo} alt="logo"  /></Link>
            <MenuBars onClick={toggle}/>
                <NavMenu>
                
                         <NavMenuLink to="/timeline">Timeline</NavMenuLink>
                         
                         <NavMenuLink to="/detail">Explore</NavMenuLink>
                         
                         <NavMenuLink to="/about">About</NavMenuLink>


                        

                            
                    </NavMenu>
                    <NavBtn>

                    <Button  onClick={()=>Logout()} primary="true">Log out</Button>
            
                    </NavBtn>
                     
            
                
        </Nav>
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

export default withRouter(Navbar)