myApp.controller("controller", function($scope){

$scope.payWithPayMoney = function() {
    var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no',
      closebuttoncaption:'back'
    };
	alert('ram');
     var close;
    var closeLoop;
    var amt = 100;
    var name =  'Ravi gupta';
    var mobile = '9898986666';
    var email = 'rvgupta444@gmail.com.com';
    var bookingId = '1001';
    var productinfo = "Order for 1001";
    var salt = "******";
    var key = "******";
    var string = key + '|' + bookingId + '|' + amt+ '|' + productinfo + '|' + name + '|' + email +'|||||||||||'+salt;    
    var encrypttext = string;

    var url = "payumoney/payuBiz.html?amt="+amt+"&name="+name+"&mobileNo="+mobile+"&email="+email+"&bookingId="+bookingId+"&productinfo="+productinfo+"&hash="+encrypttext+"&salt="+salt+"&key="+key ;
    console.log(url);
    $cordovaInAppBrowser.open(url, '_blank', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      });
    //$cordovaInAppBrowser.close();
  $rootScope.$on('$cordovaInAppBrowser:loadstart', function(e, event){
  });

  $rootScope.$on('$cordovaInAppBrowser:loadstop', function(e, event){
    // insert CSS via code / file
      $cordovaInAppBrowser.executeScript({
           file: "payumoneyPaymentGateway.js"
      });

    if(event.url == "http://localhost/success.php") {
            $cordovaInAppBrowser.close();
            cartService.clearCart();
            $state.go("app.thanksAndHotFix");
      }
      if(event.url == "http://localhost/failure.php") {
        $cordovaInAppBrowser.close();
         $ionicPopup.alert({
                 title:'Something Is Wrong',
                 template:'You payment failed!'
               });
      }
  });
  

    $rootScope.$on('$cordovaInAppBrowser:loaderror', function(e, event){
    });

      $rootScope.$on('$cordovaInAppBrowser:exit', function(e, event){
      });
  }

});