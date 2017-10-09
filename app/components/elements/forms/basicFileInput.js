// Dependencies
import React from "react";

const FileInput = ({ input: { onChange }, meta: { touched, error } }) => {
    const handleUploadFile = e => {
        e.preventDefault();
        const file = e.target.files[0];
        onChange(file);
    };

    return (
        <div className="field">
            <div>
                <input type="file" onChange={handleUploadFile} />
                {touched &&
                    (error &&
                        <span className="error">
                            <i className="fa fa-exclamation-circle" />
                            {error}
                        </span>)}
            </div>
        </div>
    );
};

export default FileInput;
