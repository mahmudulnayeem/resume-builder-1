import React from 'react';
import Link from "next/link";
import {
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Twitter,
} from "../images/icon/socialIcon";

const ResumeTemplate2 = () => {
    const data = {
        experiences: [
            {
                title: "Web Developer Intern",
                companyName: "Rapid Proposal",
                location: "On Site",
                from: "2023-05-10",
                to: "2023-05-10",
                description:
                    "Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders., The Checkout API reduced integration issues by 18% over its 100,000+ users.",
            },
            {
                title: "Web Developer",
                companyName: "Github",
                location: "OnSite",
                from: "2023-05-11",
                to: "2023-05-18",
                description:
                    "Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders., The Checkout API reduced integration issues by 18% over its 100,000+ users.",
            },
            {
                title: "Full Stack Web Developer",
                companyName: "InterSala",
                location: "On Site",
                from: "2023-05-11",
                to: "2023-05-18",
                description:
                    "Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders., The Checkout API reduced integration issues by 18% over its 100,000+ users.",
            },
        ],
        educations: [
            {
                title: "SSC",
                school: "Protapgonj High School",
                location: "Chandragonj,Noakhali",
                from: "2023-05-10",
                to: "2023-05-26",
                description: "This was good experience for me",
            },
            {
                title: "HSC",
                school: "Chomuhoni SA Collange",
                location: "Chomuhoni,Noakhali",
                from: "2023-05-10",
                to: "2023-05-26",
                description: "This was good experience for me",
            },
        ],
        skills: [
            {
                name: "React",
            },
            {
                name: "NodeJS",
            },
            {
                name: "MongoDB",
            },
            {
                name: "ExpressJS",
            },
        ],
        personalDetails: {
            name: "Mynul Islam Sakil",
            profession: "student",
            motivation: " A technical leader with eight years of experience designing, planning, and implementing internal and external APIs at scale.And Have fun with girls",
            phone: "08766888678",
            email: "mynul.sakil@gmail.com",
            address: {
                country: "Noakhali",
                city: "Chondragonj",
                countryCode: "333",
                postCode: "3333",
            },
        },
        socials: {
            linkedin: "https://www.google.com",
            github: "https://github.com/sakil470004",
            twitter: "https://www.google.com",
            instagram: "https://www.google.com",
            facebook: "https://www.google.com",
        },
    };
    // for normal text size 16px;
    // for section titles and headers 18px +bold;
    // for tittle font-size: 28px;
    const takeFistCharOfName = (name) => {
        let newCharArray = [];
        const nameArray = name.split(' ')
        nameArray.map(NA => newCharArray.push(NA.charAt(0)))
        return newCharArray;
    }
    return (
        <div className="max-w-[1000px] mx-auto py-10  border-2 border-x-white bg-gray-100 text-black">
            <div className='max-w-[680px] mx-auto'>
                <div className='relative'>
                    <h3 style={{ wordSpacing: '0.4rem' }} className='text-[28px] font-semibold font-sans uppercase mb-6 tracking-wide'>{data?.personalDetails?.name}</h3>
                    <div className='absolute -left-20 -top-1 font-bold bg-[#43f398] py-2 px-4 flex flex-col justify-center items-center'>
                        {takeFistCharOfName(data?.personalDetails?.name).map(char => <p>{char}</p>)

                        }
                    </div>
                </div>
                <p className='mb-2 uppercase'>{data?.personalDetails?.profession}</p>
                <p className='text-[#707678] mb-2'>
                    {data?.personalDetails?.address?.city},{" "}
                    {data?.personalDetails?.address?.country} | {data?.personalDetails?.email} | {data?.personalDetails?.phone}
                </p>
                <div>

                    <p className='text-[#707678] '>
                        {data?.personalDetails?.motivation}
                    </p>
                    <div className="flex gap-2 my-2 ">
                        {data?.socials?.linkedin && (
                            <Link
                                className="rounded-lg"
                                href={data?.socials?.linkedin}
                                target="_blank"
                            >
                                <Linkedin className="text-blue-600" />
                            </Link>
                        )}
                        {data?.socials?.github && (
                            <a
                                className="rounded-lg"
                                href={data?.socials?.github}
                                target="_blank"
                            >
                                <Github />
                            </a>
                        )}
                        {data?.socials?.twitter && (
                            <a
                                className="rounded-lg"
                                href={data?.socials?.twitter}
                                target="_blank"
                            >
                                <Twitter className="text-blue-600" />
                            </a>
                        )}
                        {data?.socials?.instagram && (
                            <a
                                className="rounded-lg"
                                href={data?.socials?.instagram}
                                target="_blank"
                            >
                                <Instagram className="text-red-600" />
                            </a>
                        )}
                        {data?.socials?.facebook && (
                            <a
                                className="rounded-lg"
                                href={data?.socials?.facebook}
                                target="_blank"
                            >
                                <Facebook className="text-blue-500" />
                            </a>
                        )}
                    </div>
                </div>
                {/* work Experience */}
                <div>
                    <h2 className='text-[#8a8d8e] text-xs mt-14 mb-6 font-bold uppercase'>WORK EXPERIENCE</h2>
                    {data?.experiences?.map((WE, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold mb-2 uppercase">{WE?.companyName}</h3>
                            <div className="flex gap-2 text-gray-400 ">

                                <p className="uppercase">{WE?.title}</p>
                                |
                                <p className="">
                                    {WE?.from} - {WE?.to}
                                </p>
                            </div>
                            <ul className="  mt-2 mb-6">
                                <li className="text-gray-800">- {WE?.description}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                {/* Education */}
                <div>
                    <h2 className='text-[#8a8d8e] text-xs mt-14 mb-6 font-bold uppercase'>EDUCATION</h2>
                    <div className="mb-4">
                        {data?.educations?.map((ED, index) => (
                            <div key={index} className="mt-3 mb-3">
                                <h3 className="text-lg font-semibold mb-2 uppercase">{ED?.school}</h3>
                                <div className="flex gap-2 text-gray-400 ">

                                    <p className="uppercase">{ED?.title}</p>
                                    |
                                    <p className="">
                                        {ED?.from} - {ED?.to}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                {/* Skill */}
                <div>
                    <h2 className='text-[#8a8d8e] text-xs mt-14 mb-6 font-bold uppercase'>SKILLS</h2>
                    <div className="flex gap-3 flex-grow">
                        {data?.skills?.map((singleSkill, index) => (

                            <span key={index} className='text-[14px] bg-gray-200 text-black py-2 px-4 rounded-lg'>{singleSkill?.name}</span>


                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResumeTemplate2;