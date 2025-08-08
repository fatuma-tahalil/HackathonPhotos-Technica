import '../css/UploadPost.css'
import MultipleSelectCheckmarks from './multipleCheckbox.tsx'


const PostCreation = () => {
    return(
        <>
        <div className='container'>
            <label htmlFor="titleInput" id="titleLabel">Enter title:</label>
            <input type="text" id="titleInput" defaultValue="Enter title here"></input>


            <input type="text" id="descBox" defaultValue="Enter description here"></input>
            <input type="text" defaultValue="Enter tags here"></input>
            <button type="submit" id="uploadBtn" onclick='uploadImage()'>Upload</button>
            <MultipleSelectCheckmarks/>
        </div>
    </>
    );
}
export default PostCreation
