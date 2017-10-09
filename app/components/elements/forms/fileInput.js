// Dependencies
import React from "react";

class FileInput extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        e.preventDefault();

        const { input: { onChange } } = this.props;
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = upload => {
            let file_value = {
                data: upload.target.result,
                filename: file.name,
                filetype: file.type
            };
            onChange(file_value);
        };
        reader.readAsDataURL(file);
    }

    render() {
        const { input: { value }, meta: { error, touched } } = this.props;
        const src = value ? value.data : require("../../../images/placeholders/picture.png");

        return (
            <div className="field image-upload">
                <label htmlFor="file-input">
                    <img src={src} />
                </label>
                <div>
                    <input id="file-input" name="image" type="file" onChange={this.onChange} />
                    {touched &&
                        (error &&
                            <span className="error">
                                <i className="fa fa-exclamation-circle" />
                                {error}
                            </span>)}
                </div>
            </div>
        );
    }
}

export default FileInput;
