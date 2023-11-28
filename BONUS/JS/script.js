const gridElement = document.getElementById("grid");
const playButton = document.getElementById("play-button");




playButton.addEventListener ("click", 

    function(){

        gridElement.innerHTML = "";
        let selectDiff = parseInt(document.getElementById("select-difficolta").value);

        console.log(selectDiff);

        if(selectDiff===0){
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
        }else if(selectDiff===1){
            for( let i=1; i <= 81; i++ ){
                
                const newSquare = createSquare("div", "square"); 
                newSquare.classList.add("squareMedium");
                newSquare.append(i);
                gridElement.append(newSquare);

                newSquare.addEventListener("click", 
                        
                    function() {
                        this.classList.add("clicked")
                        console.log(i)
                    }
                );
            }
        }else if (selectDiff===2){
            for( let i=1; i <= 49; i++ ){
                
                const newSquare = createSquare("div", "square");
                newSquare.classList.add("sqaureHard"); 
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
            
    }
)


function createSquare(tagtype, classname) {

    const element = document.createElement(tagtype);
    element.classList.add(classname);

    return element;

}