import MultipleSelectCheckmarks from '../components/multipleCheckbox.tsx';
const postCollection=[];
import '../css/UploadPost.css';
import '../css/app.css'



function PostCreation () {
    return (
        <>
        <div className="padding-medium" />
        <div className='container page'>
            <label htmlFor="titleInput" id="titleLabel">Enter title:</label>
            <input type="text" id="titleInput" defaultValue="Enter title here"></input>
            <form className="box" method="post" action="" encType="multipart/form-data">
                <div id="drop-zone">
                <div className="drop-zone-caption">Drag & Drop Files Here</div>
                    <span className="btn btn-primary btn-file" style= {{position: "relative"}}>
                    <span>Choose files</span>
                    <input type="file"id="drop-zone-file" name="files[]" multiple/>
                </span>
                </div>
            </form>
            <input type="image" defaultValue={"file upload placeholder"} alt="upload file"/>
            <input type="text" id="descBox" defaultValue="Enter description here"></input>
            <input type="text" defaultValue="Enter tags here"></input>
            <button type="submit" id="uploadBtn">Upload</button>
            <MultipleSelectCheckmarks/>
        </div>
        </>
    );
}
export default PostCreation;