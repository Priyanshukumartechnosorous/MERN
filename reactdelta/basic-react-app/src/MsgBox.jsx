function Msg ({name,color}
    
) {
    let styles = {color:color};
    return (
        <div>
            <h2 style={styles}>hello{name}</h2>
        </div>
    );
}




export default Msg;