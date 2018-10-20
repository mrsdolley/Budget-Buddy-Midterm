"use strict"; {
    $('#entertainment').on("click", () => {
       if($('.budget span').text().trim() !== '0') {
        $('#ent-expand').toggle('fast');
       } 

    });

    $('#food').on("click", () => {
       if($('.budget span').text().trim() !== '0') {
        $('#food-expand').toggle('fast');
       }
    });

    $('#clothing').on("click", () => {
       if($('.budget span').text().trim() !== '0') {
        $('#clothing-expand').toggle('fast');
       }
    });

    $('#bills').on("click", () => {
       if($('.budget span').text().trim() !== '0') {
        $('#bills-expand').toggle('fast');
       }
    });
   


$('#budget-entry').on('click', () => {

   let budgetValue = $('input').val();

   if(isNaN(budgetValue)){
       alert('Please enter a number in for budget.');
   } else {
       addBudget();
   }

   function addBudget(){
       budgetValue = parseFloat($('input').val());
       $('.budget').html("$" + budgetValue);
       $('#remaining span').text(budgetValue);

       $('input').val('');
   }
});
 
 
$('#submit-ent-entry').on('click', ()=> {
    let costEnt = $('#ent-cost-entry').val();
 
    if(isNaN(costEnt)){
        alert('Please enter a number in for cost.');
    } else {
        submitEnt();
    }
 
    function submitEnt(){  
        
        costEnt = parseFloat($('#ent-cost-entry').val());
        let subtotalEnt = parseFloat($('#entSub span').text());
 
        let remainEnt = parseFloat($('#remaining span').text());
 
    if ((remainEnt - costEnt) < 0) {
        alert('You have surpassed weekly budget amount.');
    } else {
        remainEnt-=costEnt;
 
        subtotalEnt += costEnt;
        $('#entSub span').text(`${subtotalEnt}`);
 
        $('#ent-item').after('<li>' + $('#ent-item-entry').val() + '</li>').addClass('added-ent-item').css('list-style','none');
        $('#ent-item-entry').val('');
        $('#ent-price').after('<li>' + '$' + $('#ent-cost-entry').val() + '</li>').addClass('added-ent-price').css('list-style','none');
    }
 
        $('#remaining span').text(`${remainEnt}`);
        $('#ent-cost-entry').val('');
    }
});
 
 
$('#submit-food-entry').on('click', ()=> {
    let costFood = $('#food-cost-entry').val();
     
    if(isNaN(costFood)){
        alert('Please enter a number in for cost.');
    } else {
        submitFood();
    }
 
    function submitFood() {
    
        costFood = parseFloat($('#food-cost-entry').val());
        let subtotalFood = parseFloat($('#foodSub span').text());
 
        let remainFood = parseFloat($('#remaining span').text());
 
    if ((remainFood - costFood) < 0) {
        alert('You have surpassed weekly budget amount.');
    } else {
        remainFood-=costFood;
 
 
        subtotalFood+=costFood;
        $('#foodSub span').text(`${subtotalFood}`);
 
        $('#food-item').after('<li>' + $('#food-item-entry').val() + '</li>').addClass('added-food-item').css('list-style','none');
        $('#food-item-entry').val('');
        $('#food-price').after('<li>' + '$' + $('#food-cost-entry').val() + '</li>').addClass('added-food-price').css('list-style','none');
    }
 
        $('#remaining span').text(`${remainFood}`);
        $('#food-cost-entry').val('');
    }
});
 
$('#submit-clothing-entry').on('click', ()=> {
    let costClothing = $('#clothing-cost-entry').val();
 
    if(isNaN(costClothing)){
        alert('Please enter a number in for cost.');
    } else {
        submitClothes();
    }
 
    function submitClothes(){ 
        costClothing = parseFloat($('#clothing-cost-entry').val());
        let subtotalClothing = parseFloat($('#clothingSub span').text());
 
        let remainClothing = parseFloat($('#remaining span').text());
 
    if ((remainClothing - costClothing) < 0) {
        alert('You have surpassed weekly budget amount.');
    } else {
        remainClothing-=costClothing;
 
        subtotalClothing+=costClothing;
        $('#clothingSub span').text(`${subtotalClothing}`);
 
        $('#clothing-item').after('<li>' + $('#clothing-item-entry').val() + '</li>').addClass('added-clothing-item').css('list-style','none');
        $('#clothing-item-entry').val('');
        $('#clothing-price').after('<li>' + '$' + $('#clothing-cost-entry').val() + '</li>').addClass('added-clothing-price').css('list-style','none');
    }
 
 
        $('#remaining span').text(`${remainClothing}`);
        $('#clothing-cost-entry').val('');
    }
});
 
$('#submit-bills-entry').on('click', ()=> {
    let costBills = $('#bills-cost-entry').val();
     
    if(isNaN(costBills)){
        alert('Please enter a number in for cost.');
    } else {
        submitBills();
    }
 
    function submitBills(){
        costBills = parseFloat($('#bills-cost-entry').val());
        let subtotalBills = parseFloat($('#billsSub span').text());
 
        let remainBills = parseFloat($('#remaining span').text());
 
    if ((remainBills - costBills) < 0) {
        alert('You have surpassed weekly budget amount.');
    } else {
        remainBills-=costBills;
 
        subtotalBills+=costBills;
        $('#billsSub span').text(`${subtotalBills}`);
 
          
        $('#bills-item').after('<li>' + $('#bills-item-entry').val() + '</li>').addClass('added-bills-item').css('list-style','none');
        $('#bills-item-entry').val('');
        $('#bills-price').after('<li>' + '$' + $('#bills-cost-entry').val() + '</li>').addClass('added-bills-price').css('list-style','none');
    }
 
        $('#remaining span').text(`${remainBills}`);
        $('#bills-cost-entry').val('');
    }
});
 
$('#reset').on('click', ()=> {
     
    $('ul li').text(''); 
 
    let remainBudget = parseFloat($('#remaining span').text('0'));
    let subtotalEnt = parseFloat($('.category span').text('0'));
 
    $('.budget').text('');
 
    if ($('.expand').is(":visible")) {
        $('.expand').hide(); 
    }
});

}