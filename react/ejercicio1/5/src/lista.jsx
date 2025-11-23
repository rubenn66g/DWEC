function Lista(){
    let array=['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
    let elementos=array.map((elementos)=><li>{elementos}</li>)
    return(
        <ul>
            {elementos}
        </ul>
    );
}

export default Lista