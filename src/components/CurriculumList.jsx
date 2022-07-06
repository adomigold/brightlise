import React from "react";
import ReactReadMoreReadLess from 'react-read-more-read-less'

export default function CurriculumList() {
    return (
        <>
            <div className="col-lg-8 col-md-7 order-md-1 bg-position-start-bottom bg-repeat-0" style={{ "backgroundImage": "url(img/logo/bg-shape.svg)" }}>
                <div className="mx-auto mx-md-0 ms-xl-7" style={{ "maxWidth": "600px" }}>
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <img className="d-inline-block mb-4 mt-2" src="/img/logo/Kids playing with car toys-amico.svg" alt="Icon" width="100" />
                                <h3 className="h5 mb-2">Learning through play</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#00A3EA" }}
                                        readLessStyle={{ color: "#00A3EA" }}>
                                        Play is a fundamental part of childhood. Our role at LISE is to enable and facilitate play.
                                        At LISE, the principles of play will underpin and support all of our policies and programmes
                                        for our children. LISE  children will be able to experience high-quality, stimulating play experiences as
                                        part of their daily lives.
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <img className="d-inline-block mb-4 mt-2" src="/img/logo/Eco education-pana.svg" alt="Icon" width="100" />
                                <h3 className="h5 mb-2">National Curriculum</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#49D5AD" }}
                                        readLessStyle={{ color: "#49D5AD" }}>
                                        LISE is following the National Curricula and the National Child Development Policy which provide a
                                        guide to the fulfilment of children’s rights, welfare, and development in Tanzania. The key principles are;
                                        1. Rights of the child: Survival ,Development, Protection and  Participation. 2. Responsive care: environment and self.
                                        3. Relationship: effective communication. 4. Respect: respect on people, property, and self.
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto mx-md-0" style={{ "maxWidth": "600px" }}>
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <img className="d-inline-block mb-4 mt-2" src="img/logo/Social distance at school-amico.svg" alt="Icon" width="100" />
                                <h3 className="h5 mb-2">Curriculum Coverage</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#FFBD5C" }}
                                        readLessStyle={{ color: "#FFBD5C" }}>
                                        1. Ability to Care for his/her: Health Identify external parts of the body and their function, Develop Personal Hygiene Skills,
                                        Develop skills for caring for his/her clothes, Develop skills for caring eating utensils, Enabling a child to eat balanced diet,
                                        Enabling the child identify diseases.
                                        2. Ability to Care for Environment: Enabling a child to develop ability in identifying things in the environment,
                                        Enabling a child to develop skills for cleaning the environment, Enabling a child to develop ability to take precautions
                                        3. Ability to Communicate: Develop listening skills, Develop Speaking Skills, Master pre – reading skills,
                                        Develop Pre – writing skills.
                                        4. Ability to relate to each other: Caring for one another, Respect himself/herself and others, Develop ability for self – control
                                        5. Mastering Artistic skills: Enabling a child to develop creative skills which involve hand – on – activities.
                                        Enabling a child to develop creative skills which involve performance of the body, Enabling a child to develop creative skills involving sounds.
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="bg-light shadow-lg rounded-3 p-4 mb-grid-gutter text-center text-sm-start">
                                <img className="d-inline-block mb-4 mt-2" src="/img/logo/Teaching-rafiki.svg" alt="Icon" width="100" />
                                <h3 className="h5 mb-2">Mathematical concepts</h3>
                                <p className="fs-sm">
                                    <ReactReadMoreReadLess
                                        charLimit={100}
                                        readMoreText={"Read more"}
                                        readLessText={"Read less"}
                                        readMoreStyle={{ color: "#F75A80" }}
                                        readLessStyle={{ color: "#F75A80" }}>
                                        Enabling a child to develop ability to classify things in his/her environment,
                                        Enabling a child to understand the concept of time, Enabling a child to develop ability to measure objects,
                                        Enabling a child to master the concept of number, Enabling children to mold /construct shapes of numbers
                                        Enabling children to trace shapes of numbers, Enabling children to write number step by step.
                                    </ReactReadMoreReadLess>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}