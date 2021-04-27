
let list;
let listAdd;
let itemCount;
let totalPrice;
let bought = [];
let email = sessionStorage.getItem('email'); //gets the users email from sessionStorage

getCart(email);

function getCart($email) {
    $.ajax({
        url: Url + 'GetCart',
        type: 'get',
        dataType: 'json',
        data: {"email":$email},
        contentType: 'text/plain',
        success: function (data) {

            list = '';
            listAdd = '';
            itemCount = 0;
            totalPrice = 0;
            itemNumber =0;

            $.each(data['data']['List'], function (i, item) {
                listAdd = '<div class="row main align-items-center">\n' +
                    '                        <div class="col-2"><img class="img-fluid" src="' + item['image'] + '"></div>\n' +
                    '                        <div class="col">\n' +
                    '                            <div class="row text-muted">' + item['operating_system'] + '</div>\n' +
                    '                            <div class="row">' + item['title'] + '</div>\n' +
                    '                        </div>\n' +
                    '                        <div class="col"> <a class="border">' +itemNumber +'</a></div>\n' +
                    '                        <div class="col">&dollar; ' + item['money_price'] + ' <a onclick="deleteItem(' + item['id'] + ')" type="button">&#10005;</a></div>\n' +
                    '                    </div>';
                list = list + listAdd;
                bought.push(JSON.stringify(item['product_id']));
                itemCount++;
                itemNumber++;

                totalPrice += parseInt(item['money_price']);
            });

            $('#cart-list').html(list);
            $('#item-count').html(itemCount + ' items');
            $('#item-total').html(itemCount + ' items');
            $('#item-price').html('&dollar; ' + totalPrice);

        },
        error: function (data) {
            alert("Error while fetching data.");
        }
    });
}

function deleteItem($id) {

    
    //jQuery Ajax request
    $.ajax({
        url: 'http://18.220.85.60/api/Cart/'+ $id , //API url
        type: 'delete',
        dataType: 'json', //dataType, which is json for this lab.
        //the json is defined here using javascript's dictionary syntax.
        contentType: 'text/plain',
        success: function (data) {
        
           
            
            

        },
        
        error: function (data) {
            alert("Error while fetching data.");
        }
    });
}




function checkOut() {

    let email =$.trim($('#email').val());
    data = {
        "email": email,
      }
    //TODO complete implementation using the product id
    var product;
    
    //jQuery Ajax request
    $.ajax({
        url: Url+'Cart', //API url
        type: 'PUT',
        dataType: 'json', //dataType, which is json for this lab.
        data: JSON.stringify(data), //the json is defined here using javascript's dictionary syntax.
        contentType: 'text/plain',
        success: function (data) {
        
           alert("Check out is Done, your total price is $" + totalPrice + " with free shipping");

           
           for(j=0;j<bought.length;j++)
           {
            addToCheckout(bought[j]);
           };
           
            

        },
        
        error: function (data) {
            alert("Error while fetching data.");
        }
    });

}

function checkOut2() {

    let email =$.trim($('#email').val());
    data = {
        "email": email,
      }
    //TODO complete implementation using the product id
    var product;
    
    //jQuery Ajax request
    $.ajax({
        url: Url+'Cart', //API url
        type: 'PUT',
        dataType: 'json', //dataType, which is json for this lab.
        data: JSON.stringify(data), //the json is defined here using javascript's dictionary syntax.
        contentType: 'text/plain',
        success: function (data) {
        
           alert("Check out is Done, your total price is $" + totalPrice + " with Express Shipping");
           
            

        },
        
        error: function (data) {
            alert("Error while fetching data.");
        }
    });

}

function checkOut2() {

    let email =$.trim($('#email').val());
    data = {
        "email": email,
      }
    //TODO complete implementation using the product id
    var product;
    
    //jQuery Ajax request
    $.ajax({
        url: Url+'Cart', //API url
        type: 'PUT',
        dataType: 'json', //dataType, which is json for this lab.
        data: JSON.stringify(data), //the json is defined here using javascript's dictionary syntax.
        contentType: 'text/plain',
        success: function (data) {
        totalPrice1 = totalPrice + (totalPrice * .50);
           alert("Check out is Done, your total price is $" + totalPrice1 + " with Express Shipping");
           
            

        },
        
        error: function (data) {
            alert("Error while fetching data.");
        }
    });

}

function checkOut3() {

    let email =$.trim($('#email').val());
    data = {
        "email": email,
      }
    //TODO complete implementation using the product id
    var product;
    
    //jQuery Ajax request
    $.ajax({
        url: Url+'Cart', //API url
        type: 'PUT',
        dataType: 'json', //dataType, which is json for this lab.
        data: JSON.stringify(data), //the json is defined here using javascript's dictionary syntax.
        contentType: 'text/plain',
        success: function (data) {
        totalPrice2 = totalPrice + (totalPrice * .75);
           alert("Check out is Done, your total price is $" + totalPrice2 + " with Overnight Shipping");
           
            

        },
        
        error: function (data) {
            alert("Error while fetching data.");
        }
    });

}