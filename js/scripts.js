$(document).ready(function() {
  
  $("#formOne").submit(function(event) {
    event.preventDefault();
    let person1= $("#person1").val();
    let category = $("input:radio[name=flavor]:checked").val();
    let size = $("#size").val();
    let color = $("#color").val();
    let address = $("#address").val();
    let email = $("#email").val();
    
    let number = $("#number").val();
    let pay = $("input:radio[name=money]:checked").val();
    let amount = $("#amount").val();
    




    $(".person1").append(person1);
    
    $(".category").append(category);
    $(".size").append(size);
    $(".color").append(color);
    $(".address").append(address)
    $(".email").append(email);
    
    $(".number").append(number);
    $(".pay").append(pay);
    $(".amount").append(amount);
    
   
    

    $("#result").show();
   

    event.preventDefault();
  });
});