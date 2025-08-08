import React from 'react'

function collectInfo() {
    
  const [post, setPost] = useState();
    id?: string;
        title: string;
        description: string;
        tags: PhotoTag[];
        imageURL?: string;
        userID: string;
        createdAt: Timestamp;
}
function FileUpload() {

    cont [File, setFile] = useState()

    function handleFile(e) {
        setFile(e.target[0])
        console.log
    }

    function handleUpload() {
        const postImage = new postImage()
        postImage.append('file', file)
        fetch (
            'url'
            {
                method: "POST",
                body: postImage
            }
        ) .then((response)) => response.json().then(
            (result) => {
                console.log('success', result)
            }
        )
        .catch(error => {
            console.error("Error:", error)
        })

    }
    return(
        <div>
            <form onSubmit = {handleUpload}>
                <input type="file" name="file" onChange={handleFile}/>

            </form>
        </div>
    )
}
