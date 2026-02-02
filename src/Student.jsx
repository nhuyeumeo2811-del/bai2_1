function Student(props){
    return(
    <>
    <div style={{
        textAlign: "center",
        border: "5px solid rgba(106, 212, 253, 1)",
        padding:"10px",
        marginBottom: "5px",
        borderRadius: "20px",
        width:"750px"
    }}>
        <h3>Họ Tên: {props.name}</h3>
        <h3>Tuổi: {props.age}</h3>
        <h3>Lớp: {props.className}</h3>
    </div>
    </>
    )
}
export default Student
