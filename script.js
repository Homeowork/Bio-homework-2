var x = 0;

function fat(){
    x += 1;
    if (x%2 == 0){
        document.getElementById("arteryfat").src="fat.jpg";
    }
    else if (x%2 == 1){
        document.getElementById("arteryfat").src="notfat.jpg";
    }
}