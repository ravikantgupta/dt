<!-- popup.js -->
    document.addEventListener('DOMContentLoaded', function () {
      main();
    
     

    });

 function showdate(element) {
		 
		
		       var city_from=$('#city_from').val();
	               var city_to=$('#city_to').val();
	  
		
		       window.localStorage.setItem("datecity_from", city_from);
	           window.localStorage.setItem("datecity_to", city_to);
	           
         
		 window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			    "duration":1000,
				"androiddelay"     :  400,
				 "href" : "calendar.html"
          });
		  
		
		
			
		 
	 }
 function flippageup(page) {


             window.plugins.nativepagetransitions.slide({

                 "direction" : "up",
                  "href" : page
             });
           }

   function bakpage(page) {


             window.plugins.nativepagetransitions.slide({
                 "direction" : "right",
                 "href" : page
             });
           }
		   
	function nextpage(page) {


             window.plugins.nativepagetransitions.slide({
                 "direction" : "left",
                 "href" : page
             });
           }	   


 function bakpagedwn(page) {


             window.plugins.nativepagetransitions.slide({
                 "direction" : "down",
                 "href" : page
             });
           }

     function buslist(element) {

	  var city_from=$('#city_from').val();
	  var city_to=$('#city_to').val();
	  
	  var jrn_date=$('#jrn_date').val();
	 
	if(city_from=='')
	{
	  alert('Please select from city');	
	  
	  return false;
	}

  if(city_to=='')
	{
	  alert('Please select to city');	
	  
	  return false;
	}	
	 
	
	window.localStorage.setItem("city_from", city_from);
	window.localStorage.setItem("city_to", city_to);
	window.localStorage.setItem("jrn_date", jrn_date);
	
	var city_from_text= jQuery("#city_from option:selected").text();
	
	var city_to_text= jQuery("#city_to option:selected").text();
	
	window.localStorage.setItem("city_from_text", city_from_text);
	window.localStorage.setItem("city_to_text", city_to_text);


	 
	 
                   
          window.plugins.nativepagetransitions.slide({
              "direction" : "left",
			   "duration":1000,
				"androiddelay"     :  400,
              "href" : "bus-list.html"
          });
		  
		  
		  
        }

         function seatdetail(bustype,busid) {

		        
				 
				  
				   window.localStorage.setItem("bustype", bustype);
				   window.localStorage.setItem("busid", busid);
					

                 window.plugins.nativepagetransitions.slide({
                      "direction" : "left",
					  "duration":1000,
			          "androiddelay"     :  400,
                      "href" : "bus-list-detail.html"
                  });
                        

			   }
				
				function pointdetal()
				{
					
					    var discount_price=jQuery('#discount_price').val();
	                    var base_fare=jQuery('#base_fare').val();
					   
					    var dis_fare=jQuery('#dis_fare').val();
						
						 var tol_fare=jQuery('#tol_fare').val();
						 
						 var tot_seats=jQuery('#tot_seats').val();
						 
						 
						  window.localStorage.setItem("discount_price", discount_price);
				          window.localStorage.setItem("base_fare", base_fare);
						  window.localStorage.setItem("dis_fare", dis_fare);
				          window.localStorage.setItem("tol_fare", tol_fare);
						  window.localStorage.setItem("tot_seats", tot_seats);
				        
					   
					
					 window.plugins.nativepagetransitions.slide({
                      "direction" : "left",
					  "duration":1000,
			          "androiddelay"     :  400,
                      "href" : "dropingpoint.html"
                  });
				  
				  
				  
				  
					
				}
		 function passangerdetail() {

		       var boarding_point=  document.querySelector('input[name="boardingpoint"]:checked').value;
			   	   
			   var dropping_point=  document.querySelector('input[name="droppoint"]:checked').value;
			   
			   
			          window.localStorage.setItem("boarding_point", boarding_point);
				      window.localStorage.setItem("dropping_point", dropping_point);


                  window.plugins.nativepagetransitions.slide({
                      "direction" : "left",
					   "duration":1000,
			          "androiddelay"     :  400,
                      "href" : "passanger.html"
                  });
                }
				
	function price_calculation(bausId,seatNo,seatPrice, elem)
    {
	 
	   setupLabel();
	   jQuery('#amntiespage').hide();
	   jQuery('#pricedetail').show();
	   var checkedVals = $('#bus-chart'+bausId).find('.selected_seat:checkbox:checked').map(function() {
			return this.value;
		}).get();
	
	  if(checkedVals=='')
		{
			var cnt = 0;
			//$("#fa-rupee"+bausId).text('0');
		    $("#tol_fare").attr('value',cnt);
		    $("#totfare").html('0');
			//$("#pcode"+bausId).prop("readonly",false);
		   // $("#pcode"+bausId).prop('disabled', false);
		   // $("#pcode"+bausId).val('');
		   // $("#fa-discount"+bausId).html('0');
			
			
			$("#base_fare").val('0');
			$("#dis_fare").val('0');
			$("#tol_fare").val('0');
			
			
		}
	  var totBusFare     =   parseFloat($("#base_fare").val());
	  var selected_seat  =  parseFloat($("#tot_seats").val());	
	  
	   var discount_price  =  parseFloat($("#discount_price").val());	
	  
	  if(totBusFare==0)
	  {
			if($(elem).prop("checked") == true)
			{

		        $("#base_fare").val(seatPrice);
			     $("#dis_fare").val(discount_price);
			   
				$("#tot_seats").val(checkedVals);
			    $("#totseat-sec").text(checkedVals);
			    
			    $("#tol_fare").val(seatPrice-discount_price);
				$("#totfare").html(seatPrice-discount_price);
			}else{ 
				$("#tot_seats").val('');
				$("#totseat-sec").text('');
				
				var cn = 0;
				
		        $("#tol_fare").attr('value',cn);
		        $("#totfare").html('0');
			}
			
	  }
	  else{
		  
		  if($(elem).prop("checked") == true)
			{
				totBusFare      =   (totBusFare + seatPrice).toFixed(2);
			    selected_seat   =   selected_seat+','+seatNo;
			}
			else{
				totBusFare      =   (totBusFare - seatPrice).toFixed(2);
			}
			
		   $("#tot_seats").val(checkedVals);
		   $("#totseat-sec").text(checkedVals);
		   
		   
		   var selectedseat  =  $("#tot_seats").val();	
				 
				 var selectedseatarr=selectedseat.split(',');
				 
				 var totseat=selectedseatarr.length;
				 
				discount_price=discount_price*totseat;
		   
		   
		   
		   if(totBusFare > 0)
		   {
			   $("#base_fare").val(totBusFare);
			     $("#dis_fare").val(discount_price);
			   
			
			   $("#tol_fare").val(totBusFare-discount_price);
			   $("#totfare").html(totBusFare-discount_price);
			 
		   }
		   else{
			    var cnt = 0;
				
		        $("#tol_fare").val('0');
		        $("#totfare").html('0'); 
		   }
	  }
	  
	  return false;
	
  }			

   function setupLabel() {
        if ($('.label_check input').length) {
            $('.label_check').each(function(){ 
                $(this).removeClass('c_on');
            });
            $('.label_check input:checked').each(function(){ 
                $(this).parent('label').addClass('c_on');
            });                
        };
        if ($('.label_sleep input').length) {
            $('.label_sleep').each(function(){ 
                $(this).removeClass('r_on');
            });
            $('.label_sleep input:checked').each(function(){ 
                $(this).parent('label').addClass('r_on');
            });
        };
    }
	
	
	function main()
		{
		
		
		    var menuhtm='<li class="init-un-active"> <a onClick="nextpage(\'index.html\')" style="padding:0px;"> <img src="images/logo.png" class="img-responsive"> </a> </li>\
                        <li class="init-arrow-down mnli"> <a onClick="nextpage(\'index.html\')"> <span class="gw-menu-text"><i class="fa fa-home"></i> Home</span> <b class="gw-arrow"></b> </a></li>\
                        <li class="init-arrow-down mnli"> <a onClick="nextpage(\'about-us.html\')"> <span class="gw-menu-text"><i class="fa fa-user"></i> About Us</span> <b class="gw-arrow"></b> </a></li>\
                        <li class="init-arrow-down mnli"> <a onClick="nextpage(\'print-ticket.html\')"> <span class="gw-menu-text"><i class="fa fa-print"></i> Print Ticket</span> <b class="gw-arrow"></b> </a></li>\
                        <li class="init-arrow-down mnli"> <a onClick="nextpage(\'cancel-ticket.html\')"> <span class="gw-menu-text"><i class="fa fa-file-o"></i> Cancellation</span> <b class="gw-arrow"></b> </a></li>\
                        <li class="init-arrow-down mnli"> <a onClick="nextpage(\'login.html\')"> <span class="gw-menu-text"><i class="fa fa-sign-in"></i> Login</span> <b class="gw-arrow"></b> </a></li>';
		
		
		
		jQuery('#menu').html(menuhtm);
		
		}
		
		
	  function setdatehtml(date)
		{
			
			
		     	var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
					var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

					var datestring = ["1<sup>st</sup>", "2<sup>nd</sup>", "3<sup>rd</sup>", "4<sup>th</sup>", "5<sup>th</sup>", "6<sup>th</sup>", "7<sup>th</sup>", "8<sup>th</sup>", "9<sup>th</sup>", "10<sup>th</sup>", "11<sup>th</sup>", "12<sup>th</sup>", "13<sup>th</sup>", "14<sup>th</sup>", "15<sup>th</sup>", "16<sup>th</sup>", "17<sup>th</sup>", "18<sup>th</sup>", "19<sup>th</sup>", "20<sup>th</sup>", "21<sup>st</sup>", "22<sup>nd</sup>", "23<sup>rd</sup>", "24<sup>th</sup>", "25<sup>th</sup>", "26<sup>th</sup>", "27<sup>th</sup>", "28<sup>th</sup>", "29<sup>th</sup>", "30<sup>th</sup>", "31<sup>st</sup>"];
					
					var dayName = days[date.getDay()];

					 document.getElementById("day").innerHTML = datestring[date.getDate()-1];
					 
					 document.getElementById("dayname").innerHTML = days[date.getDay()];
					 
					 document.getElementById("month").innerHTML =  months[date.getMonth()];
					 
					  document.getElementById("dateyear").innerHTML =  date.getFullYear();
					  
					   document.getElementById("jrn_date").value = date.getFullYear()+'-'+(parseInt(date.getMonth())+1)+'-'+date.getDate();
					  

		}	
	