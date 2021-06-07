// Get the modal
var modal = document.getElementById("productsModal");

// Get the button that opens the modal
var btn = document.getElementById("modalOpener");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  populatePreview();
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  closeModal()
}

function closeModal(){
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function populatePreview() {
    
  var s2 = document.getElementById("previewProduct");
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
  s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
  var optionArray = restrictListProducts(products, dietRestrictions, organicPreference, maxPrice);

	optionArray.sort(compare);

	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) {
			
		var productName = optionArray[i];
		let product = products.find(function(product,index){
			if(product.name == productName){
				return true;
			}
		});

		//var container = document.createElement("div");
		//container.classList.add("form-group");
		// create the checkbox and add in HTML DOM
		/*var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
		checkbox.value = productName;
		checkbox.classList.add("form-check-input");
		s2.appendChild(checkbox);*/
		
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
		label.classList.add("form-check-label");
		let price = product.price;
		label.innerHTML = productName + " - " + price;
		//label.appendChild(document.createTextNode(productName));
		s2.appendChild(label);
		
		// create a breakline node and add in HTML DOM
		s2.appendChild(document.createElement("br"));    
	}
}