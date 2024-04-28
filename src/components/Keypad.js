function Keypad (){
    function handleClick(){
        event.preventDefault();
        console.log("Entering password...");
    }
    return (
        <div>
            <input 
            type="password" 
            name="password"
            placeholder="Enter Password"
            onChange={handleClick}
            />
        </div>
    )
}

export default Keypad;