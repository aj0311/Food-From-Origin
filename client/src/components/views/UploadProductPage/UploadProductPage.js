import React from "react";

function UploadProductPage() {
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Upload Product Page </h2>
      </div>

      <form onSubmit>
        {/* dropzone*/}
        <br />
        <br />
        <label>Product</label>
        <input onChange={onTitleChange} value />
        <br />
        <br />
        <label>Description</label>
        <textarea onChange value />
        <br />
        <br />
        <label>Price</label>
        <input onChange value type="number" />
        <select>
          <option key value></option>
        </select>
        <br />
        <br />

        <button onClick>Submit</button>
      </form>
    </div>
  );
}

export default UploadProductPage;
