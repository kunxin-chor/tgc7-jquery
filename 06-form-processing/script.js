$(function(){
    $("#process-btn").click(function(){
        let productName = $('#product-name').val();
        let productDesc = $('#product-description').val();
        let productType = $(".product-type:checked").val();
        let productProperties = $(".product-properties:checked");
        let allProperties = [];
        // for (let p of productProperties) {
        //     allProperties.push(p.value);
        // }
        productProperties.each(function(index, property){
              allProperties.push(property.value)
        })
 

        let productMarket = $("#market").val();
        

        console.log("Product name=", productName);
        console.log("Product description=", productDesc);
        console.log("Product type=", productType)
        console.log("Product properties=", allProperties.join('*'))
        console.log("Product market=", productMarket)
    })
})