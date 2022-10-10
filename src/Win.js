import React from "react";
import './All.css'
import { useState } from "react";

export default function Win(){



      const [popup ,setPop] = useState(false);
      const handle1=()=>{
    
          setPop(!popup);
        }
        const close=()=>{
    
          setPop(false);
        }

return(


<>

<div data-v-23e95f50="" class="mine_top">
<div data-v-23e95f50="" class="mine_info"
><p data-v-23e95f50="" class="balance">Available balance: ₹ 0.00</p>
<div data-v-23e95f50="" class="mine_info_btn"><div data-v-23e95f50="" class="btn"><button data-v-23e95f50="" class="one_btn">
Recharge</button>
<button data-v-23e95f50="" onClick={handle1}>Read Rule</button>
</div>
</div></div>
</div>

<div className="main">
<ul data-v-23e95f50="" class="main_nav"><li >
       <h4>Sapre</h4>
        </li></ul>





      <div className="flex-1">

<div>
    <h5>Period</h5>
</div>
<div>
    <h5>Count Down</h5>
</div>

      </div>

 

      <div className="flex-2">

<div >

<button type="button" class="btn-1">Join Red</button>


</div>
<div>

<button type="button" class="btn-2">Join Green</button>


</div>
<div>

<button type="button" class="btn-3">Join Violet</button>


</div>


      </div>



      <ul data-v-23e95f50="" class="center_notes">
        
        
            <li data-v-23e95f50="">
        
        
            <ol data-v-23e95f50="" className="a" >
              0
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="b" >
              1
            </ol></li
            ><li data-v-23e95f50=""><ol data-v-23e95f50="" class="c" >
              2
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="d" >
              3
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="f">
              4
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="e">
              5
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="g" >
              6
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="h" >
              7
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="i" >
              8
            </ol></li>
            <li data-v-23e95f50=""><ol data-v-23e95f50="" class="j">
              9
            </ol></li>
            </ul>


<div>
            <ul data-v-23e95f50="" class="main_nav"><li >
       <h4>Sapre  Record</h4>
        </li></ul>
<div className="parity">
        <table data-v-23e95f50="">
            <thead data-v-23e95f50="">
                <tr data-v-23e95f50=""><th data-v-23e95f50="">Period</th>
                <th data-v-23e95f50="">Price</th>
                <th data-v-23e95f50="">Number</th>
                <th data-v-23e95f50="">Result</th>
                </tr>
                </thead>
                </table>
</div>


</div>



<div className="tt">
            <ul data-v-23e95f50="" class="main_nav"><li >
       <h4>My Record</h4>
        </li></ul>
<div className="parity">
        <table data-v-23e95f50="">
            <thead data-v-23e95f50="">
                <tr data-v-23e95f50=""><th data-v-23e95f50="">Period</th>
                <th data-v-23e95f50="">Price</th>
                <th data-v-23e95f50="">Number</th>
                <th data-v-23e95f50="">Result</th>
                </tr>
                </thead>
                </table>
</div>


</div>












</div>




































<div  class="footer aa">
  <ul  class="nav_foot aa">
    <li  class=" aa">
     
     <button type="button" class="btn  qw active">Home</button>
     </li>
      <li  class="aa"> 
      <button type="button" class="btn qw ">Search</button>
     
      </li>
      <li  class="aa"> 
      <button type="button" class="btn qw ">Win</button>
     
      </li>
      <li  class="aa"> 
      <button type="button" class="btn qw">My</button>
     
      </li>
      </ul>
      </div>





      <div class="glass">
<div className=" col-md-12">
  {popup?
<div className='main1'>
  <div className='popup12'>
  <div className='popup-header'>
   
  
  <div >
      <section >
    <div class="container">
   
   
   
    <div data-v-23e95f50="" class="wrapper">
      <p data-v-23e95f50="" class="agree_title">Rule of Guess</p>
      <div data-v-23e95f50="" class="content_agree">
        <div data-v-23e95f50="" class="contents">
          <p data-v-23e95f50="">
              3 minutes 1 issue, 2 minutes and 30 seconds to order, 30 seconds
              to show the lottery result. It opens all day. The total number of
              trade is 480 issues
            </p>
            <p data-v-23e95f50="">
              If you spend 100 to trade, after deducting 2 service fee, your
              contract amount is 98:
            </p>
            <p data-v-23e95f50="">
              1. JOIN GREEN: if the result shows 1,3,7,9, you will get (98*2)
              196
            </p>
            <p data-v-23e95f50="">If the result shows 5, you will get (98*1.5) 147</p><p data-v-23e95f50="">
              2. JOIN RED: if the result shows 2,4,6,8, you will get (98*2) 196;
              If the result shows 0, you will get (98*1.5) 147
            </p>
            <p data-v-23e95f50="">
              3. JOIN VIOLET: if the result shows 0 or 5, you will get (98*4.5)
              441
            </p>
            <p data-v-23e95f50="">
              4. SELECT NUMBER: if the result is the same as the number you
              selected, you will get (98*9) 882
            </p>
            </div>
            </div>
            <div data-v-23e95f50="" onClick={close} class="close_btn">
              <button data-v-23e95f50="">CLOSE</button>

              </div>
              </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   </div>















</section>
     </div>
     

 
   
  </div>
  </div>
</div>:""}
</div>
</div>




















</>



);



}