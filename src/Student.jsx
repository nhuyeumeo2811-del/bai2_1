function Student(props){
    return(
    <>
    <div style={{
        textAlign: "center",
        border: "5px solid rgb(266, 196,219,1)",
        padding:"10px",
        marginBottom: '5px',
        borderRadius: '20px',
    }}>
        <h2>Họ Tên: {props.name}</h2>
        <p>Tuổi: {props.age}</p>
        <p>Lớp: {props.classname}</p>
    </div>
    </>
    )
}
export default Student
