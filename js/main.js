function getData() {
  $.ajax({
    url: "https://jquerycrud-ed8dc.firebaseio.com/dogs.json",
    type: "GET",
    success: function (response) {
      printData(response);
    }
  });
}

var postObject = {
  'name': 'Gogdo',
  'breed': 'Black Cat'
}
//$(document).ready(function(){
  //$('#guardar').click(function(){
   // $.post( "https://jquerycrud-ed8dc.firebaseio.com/dogs.json", /*URL*/
  //JSON.stringify(petObject)

 // })
  
//})

function postData() {


  if ($('#pet-name').val() != "") {
    var postObject = {
      'name': $('#pet-name').val(),
      'breed': $('#pet-breed').val(),
      'age': $('#pet-age').val(),
      'photo': $('#pet-photo').val()
    }
    $.ajax({
      url: "https://jquerycrud-ed8dc.firebaseio.com/dogs.json",
      data: JSON.stringify(postObject),
      type: "POST",
      dataType: 'json',
      success: function (response) {
        swal("¡Bien!", "Tu mascota ha sido guardado:)", "success");
        console.log(response)
      }
      
    });
  }else{
    $("#divName").addClass("has-error");
  }
}

function updateData() {
  $.ajax({
    url: 'https://jquerycrud-ed8dc.firebaseio.com/dogs/-LeJgLYcUIR1OwHL49pW.json',
    type: 'PUT',
    data: JSON.stringify(postObject),
    success: function (response) {
      console.log(response)
    }
  });
}

function deleteData() {
  $.ajax({
    url: 'https://jquerycrud-ed8dc.firebaseio.com/dogs/-LeJgLYcUIR1OwHL49pW.json',
    type: 'DELETE',
    success: function (response) {
      console.log(response)
    }
  });
}




function printData(dataToPrint) {
  $.each(dataToPrint,(key,value)=>{
    console.log(`key ${key}, value ${value}, name ${value.name}, breed: ${value.breed},age: ${value.age},photo: ${value.photo}`)
    $(".data-wrapper").append(
        `
        <div class="card" >
									<img src='${value.photo}' class="card-img-top" alt="...">
									<div class="card-body">
                    <h5 class="card-title">${value.name}</h5>
                    <h5 class="card-title">${value.breed}</h5>
										<p class="card-text">¡Hola! Yo soy Tony, y vengo de una familia de muchos hermanitos, mi mamá fue encontrada por unos agradables humanos y ahora nos estan buscando hogar a todos. Si quieres ser parte de mi familia y enseñarme lo bonita que es la vida ¡sólo dilo y te acompañare durante mis 7 vidas!</p>
										<a href="#" class="btn btn-primary">¡Adoptar!</a>
									</div>
								</div> `
      )
  })
}
