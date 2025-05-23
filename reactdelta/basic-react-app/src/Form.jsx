function handleFormSubmit(event) {
    event.preventDefault();
    console.log("form was sumbitted");

    
}



export default function From() {
    return (
        <form onSubmit={handleFormSubmit}>
            <input placeholder="write something"/>
            <button >Submit</button>
        </form>
    )
}