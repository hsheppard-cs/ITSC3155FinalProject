let list3;
let listAdd3;
let itemCount3;
let totalPrice3;

let email = sessionStorage.getItem('email11'); //gets the users email from sessionStorage
email11 = email;

getCart(email11);
function getCart(email11) {
    $.ajax({
        url: Url + 'GetCart',
        type: 'get',
        dataType: 'json',
        data: {"email":email11},
        contentType: 'text/plain',
        success: function (data) {
            
            list3 = '';
            listAdd3 = '';
            itemCount3 = 0;
            totalPrice3 = 0;

            $.each(data['data']['List'], function (i, item) {
                listAdd3 = '<div class="row main align-items-center">\n' +
                    '                        <div class="col-2"><img class="img-fluid" src="' + item['image'] + '"></div>\n' +
                    '                        <div class="col">\n' +
                    '                            <div class="row text-muted">' + item['operating_system'] + '</div>\n' +
                    '                            <div class="row">' + item['title'] + '</div>\n' +
                    '                        </div>\n' +
                    '                        <div class="col"> <a class="border">1</a></div>\n' +
                    '                        <div class="col">&dollar; ' + item['money_price'] + ' <a onclick="deleteItem(' + item['id'] + ')" type="button">&#10005;</a></div>\n' + 
                    
                    '<button class="btn btn-info float-right btn-sm" onclick="addToCart1('+item['product_id']+')">Add to Cart</button>\n' +
                    
                    '                    </div>';
                list3 = list3 + listAdd3;
                itemCount3++;
                totalPrice3 += parseInt(item['money_price']);
            });

            $('#cart-list3').html(list3);
            $('#item-count3').html(itemCount3 + ' items');
            $('#item-total3').html(itemCount3 + ' items');
            $('#item-price3').html('&dollar; ' + totalPrice3);
            
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