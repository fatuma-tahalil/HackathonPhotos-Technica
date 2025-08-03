import "../css/App.css"
// import "../css/UploadPost.css"

const UploadPost = () => {

    return(
        <>
            <label for="titleInput" input="text">Enter title:</label>
            <input type="text" id="titleInput" value="Enter title here"></input>
            <input type="text" value="Enter description here"></input>
        </>
    )
}
export default UploadPost