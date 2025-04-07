import React from "react";

export const Clock = (prompts) => {
    return (
            <div className="text-white p-5 fs-3 fw-bold">
                {prompts.value}
            </div>
    );
};