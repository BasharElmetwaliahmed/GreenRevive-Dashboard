import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useDarkMode } from "../../context/DarkModeProvider";
import styled from "styled-components";
import { useFormContext } from "react-hook-form";
import { BASE_URL } from "../../utils/constants";
import { headers } from "../../utils/helpers";

const TextEditorContainer =styled.div`
    padding: 2rem 0rem;
`
function ArticleTextEditor() {
  const editorRef = useRef(null);
  const { setValue } = useFormContext();
  const { darkMode } = useDarkMode();

  const handleUploadImage = async (blobInfo) => {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("media", blobInfo.blob());

      fetch(`${BASE_URL}/api/admin/upload_media/store`, {
        method: "POST",
        headers,
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          resolve(result.data["Upload media Path"]);
        })
        .catch((error) => {
          console.error(error);
          reject("Upload failed");
          console.error("Error:", error);
        });
    });
  };
  return (
    <TextEditorContainer>
      <Editor
        theme="dark"
        selector="textarea"
        content_style="body { background: #6A7A95; color: white; font-size: 14pt; font-family: Arial; }"
        apiKey="ybjrvuntcnzv4v1v1ltc60omyts3uyg32az1s98dgbobg6ze"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "forecolor backcolor | styles | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
          images_upload_url: `${BASE_URL}/server.php`,
          automatic_uploads: true,
          images_reuse_filename: true,
          images_upload_handler: handleUploadImage,
          document_base_url:`${BASE_URL}`,
          skin: darkMode ? "oxide-dark" : null,
          content_css: darkMode ? "dark" : null,
          //   content_style:
          //     "body { font-family:Helvetica,Arial,sans-serif; font-size:30px ;background-color:var(--color-grey-0); }",
        }}
        onEditorChange={(e)=>setValue('content',e)}
        onKeyDown = {(e)=>{
          console.log("onKeyDown",e);        }}
      />
    </TextEditorContainer>
  );
}

export default ArticleTextEditor;
