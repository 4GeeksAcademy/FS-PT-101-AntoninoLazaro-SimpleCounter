import React from "react";

export const Clock = (prompts) => {
    return (
            <div className="col-lg-2 col-sm-12 text-white p-5 fs-3 fw-bold">
                {prompts.value}
            </div>
    );
};