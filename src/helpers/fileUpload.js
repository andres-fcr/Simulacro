export const fileUpload = async (file) => {

    const cloudUrl = ' https://api.cloudinary.com/v1_1/dbyw7mbt6';
    const formData = new FormData();
    formData.append('upload_preset', 'front-6');
    formData.append('file', file);


    const resp = await fetch(cloudUrl, {
        method: 'POST',
        body: formData
    })
    const cloudResp = await resp.json();
    return cloudResp.secure_url;

}


