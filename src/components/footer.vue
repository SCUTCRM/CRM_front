<template>
    <div class="vtFooter">
        <p id="info">Powered by vtiger CRM 6.3.0 &nbsp;© 2004 - 2018&nbsp;&nbsp;
           <a href="//www.vtiger.com" target="_blank">vtiger.com</a>
           "&nbsp;|&nbsp;"
           <a href="#" onclick="window.open('copyright.html','copyright', 'height=115,width=575').moveTo(210,620)">
               Read License</a>
            <a href="https://www.vtiger.com/crm/privacy-policy" target="_blank">Privacy Policy</a>
        </p>
    </div>   
</template>

<script>
export default {
    
}
</script>

<style>
/*将此模块永远放置于底部*/
.vtFooter{
   position: absolute;
   display: block;
   width: 100%;
   background-color:blue;
   font-size: 0.9em;
}

#info{
    margin: 0 0 9px;
    font-family: "Helvetica Neue",Arial, Helvetica, sans-serif;
    line-height: 18px;
}
</style>


