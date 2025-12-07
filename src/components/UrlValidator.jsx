import { useState } from "react";

function UrlValidator() {
    const [url, setUrl] = useState("");
    const [isValid, setIsValid] = useState(null);

    const validUrl = (value) => {
        const pattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
        return pattern.test(value);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setUrl(value);
        if (value === "") {
            setIsValid(null);
        } else {
            setIsValid(isValidUrl(value));
        }
    };

    return (
        <div>
            <input
                type="text"
                value={url}
                onChange={handleChange}
                placeholder="Enter a URL"
            />
            {isvalid === true && <p>✅ Valid Url</p>}
            {isvalid === false && <p>❌ InValid Url</p>}
        </div>
    );
}

export default UrlValidator;