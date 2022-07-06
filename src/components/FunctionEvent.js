function FunctionEvent(){
    function handleClick(){
        console.log("click2")
    }
return(
    <div>
      functional Component
      <button onClick={handleClick}>click here</button>  
    </div>
);

}
export default FunctionEvent; 