let list2;
let listAdd2;
let itemCount2;
let totalPrice2;

let email = sessionStorage.getItem('email1'); //gets the users email from sessionStorage
email1 = email;
getCart(email1);
function getCart(email1) {
    $.ajax({
        url: Url + 'GetCart',
        type: 'get',
        dataType: 'json',
        data: {"email":email1},
        contentType: 'text/plain',
        success: function (data) {
            
            list2 = '';
            listAdd2 = '';
            itemCount2 = 0;
            totalPrice2 = 0;

            $.each(data['data']['List'], function (i, item) {
                listAdd2 = '<div class="row main align-items-center">\n' +
                    '                        <div class="col-2"><img class="img-fluid" src="' + item['image'] + '"></div>\n' +
                    '                        <div class="col">\n' +
                    '                            <div class="row text-muted">' + item['operating_system'] + '</div>\n' +
                    '                            <div class="row">' + item['title'] + '</div>\n' +
                    '                        </div>\n' +
                    '                        <div class="col"> <a class="border">1</a></div>\n' +
                    '                        <div class="col">&dollar; ' + item['money_price'] + ' <a onclick="deleteItem(' + item['id'] + ')" type="button">&#10005;</a></div>\n' + 
                    
                    '<button class="btn btn-info float-right btn-sm" onclick="addToCart1('+item['product_id']+')">Add to Cart</button>\n' +
                    
                    '                    </div>';
                list2 = list2 + listAdd2;
                itemCount2++;
                totalPrice2 += parseInt(item['money_price']);
            });

            $('#cart-list2').html(list2);
            $('#item-count2').html(itemCount2 + ' items');
            $('#item-total2').html(itemCount2 + ' items');
            $('#item-price2').html('&dollar; ' + totalPrice2);
            
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