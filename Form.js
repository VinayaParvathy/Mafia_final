class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      
      this.greeting = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }
    
    
      
   
  
    display(){
      var title = createElement('h2')
      title.html("Mafia Game");
      title.position(130, 0);
  
      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        if(playerCount===1)
        {
          player.role="Mafia";
        }
        else if(playerCount===2){
          player.role="Secret Agent";
  
        }
        else if(playerCount===3){
          player.role="Doctor";
  
        }
        else{
          player.role="Villager";
        }
        
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name + " " +"You are"+player.role);
        this.greeting.position(130, 100);
      });
  
     
      
  
      
  
    }
  }
  