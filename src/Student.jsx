function Student(props){
    return(
    <>
    <div style={{
        textAlign: "center",
        border: "5px solid blue",
        padding:"20px",
        marginBottom: "5px",
        borderRadius: "20px"
    }}>
        <h3>Họ Tên: {props.name}</h3>
        <h3>Tuổi: {props.age}</h3>
        <h3>Lớp: {props.className}</h3>
    </div>
    </>
    )
}
export default Student
