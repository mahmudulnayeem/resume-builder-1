"use client";
import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "./../images/icon/socialIcon";
function ResumeTemplate({ data }) {
  //   const skill = ["React JS", "Tailwind CSS", "HTML5", "CSS3", "Firebase"];

  //   const data = {
  //     experiences: [
  //       {
  //         title: "Web Developer Intern",
  //         companyName: "Rapid Proposal",
  //         location: "On Site",
  //         from: "2023-05-10",
  //         to: "2023-05-10",
  //         description:
  //           "Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders., The Checkout API reduced integration issues by 18% over its 100,000+ users.",
  //       },
  //       {
  //         title: "Web Developer",
  //         companyName: "Github",
  //         location: "OnSite",
  //         from: "2023-05-11",
  //         to: "2023-05-18",
  //         description:
  //           "Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders., The Checkout API reduced integration issues by 18% over its 100,000+ users.",
  //       },
  //       {
  //         title: "Full Stack Web Developer",
  //         companyName: "InterSala",
  //         location: "On Site",
  //         from: "2023-05-11",
  //         to: "2023-05-18",
  //         description:
  //           "Led scope, planning, and design of the Checkout API with 3 teams and over 25 stakeholders., The Checkout API reduced integration issues by 18% over its 100,000+ users.",
  //       },
  //     ],
  //     educations: [
  //       {
  //         title: "SSC",
  //         school: "Protapgonj High School",
  //         location: "Chandragonj,Noakhali",
  //         from: "2023-05-10",
  //         to: "2023-05-26",
  //         description: "This was good experience for me",
  //       },
  //       {
  //         title: "HSC",
  //         school: "Chomuhoni SA Collange",
  //         location: "Chomuhoni,Noakhali",
  //         from: "2023-05-10",
  //         to: "2023-05-26",
  //         description: "This was good experience for me",
  //       },
  //     ],
  //     skills: [
  //       {
  //         name: "React",
  //       },
  //       {
  //         name: "NodeJS",
  //       },
  //       {
  //         name: "MongoDB",
  //       },
  //       {
  //         name: "ExpressJS",
  //       },
  //     ],
  //     personalDetails: {
  //       name: "Mynul Islam Sakil",
  //       profession: "student",
  //       motivation:
  //         " A technical leader with eight years of experience designing, planning, and implementing internal and external APIs at scale.And Have fun with girls",
  //       phone: "08766888678",
  //       email: "mynul.sakil@gmail.com",
  //       address: {
  //         country: "Noakhali",
  //         city: "Chondragonj",
  //         countryCode: "333",
  //         postCode: "3333",
  //       },
  //     },
  //     socials: {
  //       linkedin: "https://www.google.com",
  //       github: "https://github.com/sakil470004",
  //       twitter: "https://www.google.com",
  //       instagram: "https://www.google.com",
  //       facebook: "https://www.google.com",
  //     },
  //   };
  // for normal text size 16px;
  // for section titles and headers 21px;
  return (
    <div className="max-w-[1000px] mx-auto py-10  border-2 border-x-white">
      {/* personal details */}
      <header className="mx-9 px-16 grid grid-cols-3 py-8 items-center">
        <div className="col-span-1">
          <h1 className="text-4xl font-semibold mb-2">
            {data?.personalDetails?.name}
          </h1>
          <p className="font-semibold mb-1">
            {data?.personalDetails?.profession}
          </p>
          <p>
            {data?.personalDetails?.address?.city},{" "}
            {data?.personalDetails?.address?.country}
          </p>

          <p className="my-1">{data?.personalDetails?.email}</p>
          <p>{data?.personalDetails?.phone}</p>
        </div>
        <div className="col-span-2">
          <p>{data?.personalDetails?.motivation}</p>
          <div className="flex gap-2 my-2 justify-end">
            {data?.socials?.linkedin && (
              <a
                className="rounded-lg"
                href={data?.socials?.linkedin}
                target="_blank"
              >
                <Linkedin className="text-blue-600" />
              </a>
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
      </header>
      <main className="mx-9 px-16 py-8">
        {/* work experience */}
        <section>
          <div className=" flex justify-between">
            <h1 className="text-indigo-500 text-2xl font-semibold">
              Work Experience
            </h1>
            <div className="w-3/4 border-indigo-500 border-t-4 mt-3"></div>
          </div>
          {data?.experiences?.map((WE) => (
            <div>
              <div className="flex justify-between items-center mt-4 mb-3">
                <h3 className="text-xl font-semibold">{WE?.title}</h3>
                <p className="font-semibold">{WE?.companyName}</p>
                <p className="font-semibold text-gray-600">
                  {WE?.from} - {WE?.to}
                </p>
              </div>
              <ul className="list-disc pl-4 mb-4">
                <li className="font-thin">{WE?.description}</li>
              </ul>
            </div>
          ))}
        </section>
        {/* education */}
        <section>
          <div className=" flex justify-between my-8">
            <h1 className="text-indigo-500 text-2xl font-semibold">
              Education
            </h1>
            <div className="w-3/4 border-indigo-500 border-t-4 mt-3"></div>
          </div>

          <div className="mb-4">
            {data?.educations?.map((ED) => (
              <div className="flex justify-between items-center mt-3 mb-3">
                <h3 className="text-xl font-semibold">{ED?.title}</h3>
                <p className="font-semibold text-gray-700">{ED?.school}</p>
                <p className="font-semibold text-gray-600">
                  {ED?.from} - {ED?.to}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* skill */}
        <section>
          <div className=" flex justify-between my-8">
            <h1 className="text-indigo-500 text-2xl font-semibold">Skill</h1>
            <div className="w-3/4 border-indigo-500 border-t-4 mt-3"></div>
          </div>
          <div className="font-semibold flex gap-2">
            {data?.skills?.map((singleSkill, index) => (
              <span>
                <span>{singleSkill?.name}</span>
                {index != [data?.skills.length - 1] && <span> | </span>}
              </span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ResumeTemplate;
