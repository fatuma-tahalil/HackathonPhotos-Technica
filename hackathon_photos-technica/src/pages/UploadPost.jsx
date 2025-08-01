import './UploadPost.css'
const postCollection=[];


function PostCreation () {
    return(
        <>
        <div className='container'>
            <label for="titleInput" input="text">Enter title:</label>
            <input type="text" id="titleInput" value="Enter title here"></input>
            <input type="image" value={"file upload placeholder"}/>
            <input type="text" id="descBox" value="Enter description here"></input>
            <input type="text" value="Enter tags here"></input>
            <button type="submit" id="uploadBtn">Upload</button>
        </div>
    </>
    );
}
export default PostCreation