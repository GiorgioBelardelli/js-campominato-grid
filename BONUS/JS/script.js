const gridElement = document.getElementById("grid");
const playButton = document.getElementById("play-button");
const selectDiff = document.getElementById("select-difficolta");



playButton.addEventListener ("click", 

    function(){

        gridElement.innerHTML = "";


            for( let i=1; i <= 100; i++ ){
                
                const newSquare = createSquare("div", "square"); 
                newSquare.append(i);
                gridElement.append(newSquare);

                newSquare.addEventListener("click", 
                        
                    function() {
                        this.classList.add("clicked")
                        console.log(i)
                    }
                );
            }
    }
)


function createSquare(tagtype, classname) {

    const element = document.createElement(tagtype);
    element.classList.add(classname);

    return element;

}