import '../css/App.css';
// import '../css/UploadPost.css';

const UploadPost = () => {
    return(
        <div className='page'>
            <label for="titleInput" input="text">Enter title:</label>
            <input type="text" id="titleInput" value="Enter title here"></input>
            <input type="text" value="Enter description here"></input>
        </div>
    )
}
export default UploadPost