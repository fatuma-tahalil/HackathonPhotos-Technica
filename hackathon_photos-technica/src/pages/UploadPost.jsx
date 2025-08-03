import './UploadPost.css'
import MultipleSelectCheckmarks from './multipleCheckbox.tsx'
const postCollection=[];


function PostCreation () {
    return(
        <>
        <div className='container'>
            <label htmlFor="titleInput" id="titleLabel">Enter title:</label>
            <input type="text" id="titleInput" defaultValue="Enter title here"></input>
        <form className="box" method="post" action="" enctype="multipart/form-data">
            <div id="drop-zone">
            <div className="drop-zone-caption">Drag & Drop Files Here</div>
                <span className="btn btn-primary btn-file" style="position: relative">
                <span>Choose files</span>
                <input type="file"id="drop-zone-file" name="files[]" multiple/>
            </span>
             </div>
        </form>
            <input type="image" defaultValue={"file upload placeholder"}/>
            <input type="text" id="descBox" defaultValue="Enter description here"></input>
            <input type="text" defaultValue="Enter tags here"></input>
            <button type="submit" id="uploadBtn">Upload</button>
            <MultipleSelectCheckmarks/>
        </div>
    </>
    );
}
export default PostCreation