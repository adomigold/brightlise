import React from "react";

export default function VisionList() {
    return (
        <>
            <h2 className="mb-3 text-center text-md-start">Our Vision, Values and Aims</h2>
            <p className="text-muted mb-4 pb-2">
                Positive, caring relationships based on trust and respect, are at the heart of our philosophy.
            </p>
            <p>
                <strong>We have a clear vision of what we want to achieve at Lise Day Care Centre:</strong>
            </p>
            <ul className="list-unstyled fs-sm pb-1 d-table mx-auto mx-md-0">
                <li className="d-flex mb-2"><i className="ai-check-circle text-success fs-lg me-3"></i><span>To provide a safe, happy, caring and stimulating environment for your child.</span></li>
                <li className="d-flex mb-2"><i className="ai-check-circle text-success fs-lg me-3"></i><span>To enable all children to develop their capabilities as successful learners, confident individuals, responsible citizens and effective contributors to society.</span></li>
            </ul>
        </>
    )
}