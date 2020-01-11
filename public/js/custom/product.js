$(document).ready(function(){
  
    function create() {
        $("#create-button").click(function () {
           
            $('#create-modal').modal('show');  
        });
    }
    create();


  

    $(document).on('click', "#edit-product-button", function() {


        $(this).addClass('edit-item-trigger-clicked'); //useful for identifying which trigger was clicked and consequently grab data from the correct row and not the wrong one.
    
        var options = {
          'backdrop': 'static'
        };
        $('#edit-product-modal').modal(options)
      });
    
      // on modal show
      $('#edit-product-modal').on('show.bs.modal', function() {
        var el = $(".edit-item-trigger-clicked"); // See how its usefull right here? 
        var row = el.closest(".data-row");
    
        // get the data
        var id = el.val();
        var viewName = row.children("#viewName").text();
        var viewCategoryId  = row.children("#viewCategoryId").text();
        var viewProductTypeId = row.children("#viewProductTypeId").text();
        var viewWeight = row.children("#viewWeight").text();
        var viewPrice = row.children("#viewPrice").text();
        var viewCost = row.children("#viewCost").text();
        var viewLowLimit = row.children("#viewLowLimit").text();
    
        // fill the data in the input fields
        
        
        $("#editProductId").val(id);
        $("#editProductId2").val(id);
        $("#editProductName").val(viewName);

         var catagoryhtml='';
       
        

  

        
         $.get("/api/categories", function(data, status){
            
            data.forEach( function(i, item) {
             //   alert(viewCategoryId+'   '+i.name);
               if( viewCategoryId==i.name )
               {
                catagoryhtml+='   <option  selected="selected"  value="  '+i.id+' ">  '+i.name+'    </option>';
               }
               else{
                catagoryhtml+='   <option value="  '+i.id+' "> '+i.name+'</option>';
               }
              
                // catagoryhtml += '   <option value="23"> addasfs </option>  <option value="33"> addaddddddddddsfs </option>  <option value="4"> adddddddddddasfs </option>'
         
                //catagoryhtml+='   <option value="5 "> name2</option>';
            ///alert("Data: " + item.id + "Data: " + item.name + "\nStatus: " + status);
   

            });
           // alert(catagoryhtml);
            
            $("#editProductCatagoryId").html(catagoryhtml);
          });

     
  

        var product_types_html="";
          $.get("/api/product_types", function(data, status){
            
            data.forEach( function(i, item) {
             //   alert(viewCategoryId+'   '+i.name);
               if( viewProductTypeId==i.name )
               {
                product_types_html+='   <option  selected="selected"  value="  '+i.id+' ">  '+i.name+'    </option>';
               }
               else{
                product_types_html+='   <option value="  '+i.id+' "> '+i.name+'</option>';
               }
              
                // catagoryhtml += '   <option value="23"> addasfs </option>  <option value="33"> addaddddddddddsfs </option>  <option value="4"> adddddddddddasfs </option>'
         
                //catagoryhtml+='   <option value="5 "> name2</option>';
            ///alert("Data: " + item.id + "Data: " + item.name + "\nStatus: " + status);
   

            });
           // alert(catagoryhtml);
            
            $("#editProductTypeId").html(product_types_html);
          });

     


  
          $("#editProductWeight").val(viewWeight);
          $("#editProductPrice").val(viewPrice);
          $("#editProductCost").val(viewCost);
        $("#editLowLimit").val(viewLowLimit);
    
      });
    
      // on modal hide
      $('#edit-product-modal').on('hide.bs.modal', function() {
        $('.edit-item-trigger-clicked').removeClass('edit-item-trigger-clicked')
        $("#edit-form").trigger("reset");
      })













  });