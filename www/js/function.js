


	 function slide(hrf) {
		 
		 window.plugins.nativepagetransitions.flip({
				 'backgroundColor' : "#BBBBBB",
				'direction': 'up',
				'duration': 2000,
				"href" : hrf
            });
			  
  }
  
  
   function logout() {
	   
	   window.localStorage.removeItem("loggedIn");
	     window.localStorage.removeItem("userdetail");
	    window.localStorage.removeItem("loggedwithfb");
	      
	   slide('login.html');
	   
   }
   
   function viewprofile() {
	   
   }
   
   
  
   
   function setuserinfo(logged_in)
   {	
					
					
					
	   
   }
   
  
   
   app.initialize();
   
   
   