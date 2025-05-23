function handleClick(event) {
    console.log("hello");
    console.log(event);
    
    
}
function handleMouseOver() {
    console.log("bye!");
    
}
function handleDoubleClick() {
    console.log("double click me!");
    
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore omnis ipsam, quam laborum consequatur. Repudiandae voluptate maxime fugit! Placeat excepturi dicta tempora ipsam iste harum quod temporibus cum dolore.</p>
            <button onDoubleClick={handleDoubleClick}>Double click me!</button>
        </div>
    );
}